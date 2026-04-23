<?php
// Endpoint de sauvegarde des résultats — 1 fichier JSON par élève dans /data.
//
// Sécurité :
// - Slug validé [a-z0-9\-] uniquement → pas de directory traversal.
// - Taille max 16 Ko par requête.
// - Pas d'exécution arbitraire.
//
// Protéger /data via .htaccess :
//   <IfModule mod_authz_core.c>
//     <Directory "data">
//       Require all denied
//     </Directory>
//   </IfModule>
// Ou un `deny from all` dans /data/.htaccess.

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); exit(json_encode(['error'=>'method_not_allowed'])); }

$raw = file_get_contents('php://input', false, null, 0, 16384);
if (!$raw) { http_response_code(400); exit(json_encode(['error'=>'empty'])); }

$payload = json_decode($raw, true);
if (!is_array($payload)) { http_response_code(400); exit(json_encode(['error'=>'invalid_json'])); }

function sanitizeSlug($s) {
    $s = strtolower((string)$s);
    $s = preg_replace('/[^a-z0-9\- ]/', '', $s);
    $s = trim(preg_replace('/\s+/', '-', $s));
    return $s;
}

$slug = sanitizeSlug($payload['slug'] ?? '');
if (!$slug || strlen($slug) > 60) { http_response_code(400); exit(json_encode(['error'=>'invalid_slug'])); }

$quizId = (string)($payload['quizId'] ?? '');
if (!preg_match('/^(maths|physique|svt)-[3456]$/', $quizId)) {
    http_response_code(400); exit(json_encode(['error'=>'invalid_quiz']));
}

$attempt = $payload['attempt'] ?? null;
if (!is_array($attempt) || empty($attempt['date'])) {
    http_response_code(400); exit(json_encode(['error'=>'invalid_attempt']));
}

// Validation stricte des champs (évite les données aberrantes : note > 20, totaux négatifs, log géant).
function validAttempt(array $a): bool {
    // date ISO plausible (on ne vérifie pas le parsing complet, juste la forme)
    if (!is_string($a['date']) || !preg_match('/^\d{4}-\d{2}-\d{2}T/', $a['date'])) return false;
    $mode = $a['mode'] ?? 'training';
    if (!in_array($mode, ['training', 'exam'], true)) return false;
    foreach (['note', 'noteRaw'] as $k) {
        if (!isset($a[$k]) || !is_numeric($a[$k])) return false;
        $v = (float)$a[$k];
        if ($v < 0 || $v > 20) return false;
    }
    foreach (['correct', 'total'] as $k) {
        if (!isset($a[$k]) || !is_numeric($a[$k])) return false;
        $v = (int)$a[$k];
        if ($v < 0 || $v > 200) return false;
    }
    if ((int)$a['correct'] > (int)$a['total']) return false;
    if (!isset($a['totalMs']) || !is_numeric($a['totalMs']) || (int)$a['totalMs'] < 0 || (int)$a['totalMs'] > 24*3600*1000) return false;
    if (isset($a['domains']) && !is_array($a['domains'])) return false;
    if (isset($a['log'])) {
        if (!is_array($a['log']) || count($a['log']) > 200) return false;
    }
    return true;
}
if (!validAttempt($attempt)) {
    http_response_code(422); exit(json_encode(['error'=>'invalid_attempt_fields']));
}

$dir = __DIR__ . '/data';
if (!is_dir($dir)) { @mkdir($dir, 0755, true); }

$path = $dir . '/' . $slug . '.json';
$fp = @fopen($path, 'c+');
if (!$fp) { http_response_code(500); exit(json_encode(['error'=>'fs'])); }
flock($fp, LOCK_EX);

$existingRaw = stream_get_contents($fp);
$data = $existingRaw ? (json_decode($existingRaw, true) ?: null) : null;
if (!is_array($data)) {
    $data = ['name'=>$payload['name'] ?? $slug, 'klass'=>$payload['klass'] ?? '', 'quizzes'=>[], 'createdAt'=>gmdate('c')];
}
if (isset($payload['name']))  $data['name']  = (string)$payload['name'];
if (isset($payload['klass'])) $data['klass'] = (string)$payload['klass'];
if (!isset($data['quizzes'][$quizId])) $data['quizzes'][$quizId] = ['attempts'=>[]];

// Déduplication par date ISO
$already = false;
foreach ($data['quizzes'][$quizId]['attempts'] as $a) {
    if (($a['date'] ?? '') === $attempt['date']) { $already = true; break; }
}
if (!$already) {
    $data['quizzes'][$quizId]['attempts'][] = $attempt;
    // Limiter à 100 dernières tentatives par quiz (sécurité)
    if (count($data['quizzes'][$quizId]['attempts']) > 100) {
        $data['quizzes'][$quizId]['attempts'] = array_slice($data['quizzes'][$quizId]['attempts'], -100);
    }
}
$data['updatedAt'] = gmdate('c');

ftruncate($fp, 0); rewind($fp);
fwrite($fp, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
flock($fp, LOCK_UN); fclose($fp);

echo json_encode(['ok'=>true, 'saved'=>!$already]);
