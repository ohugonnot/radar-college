<?php
// Récupère le profil complet d'un élève (tous quiz, toutes tentatives).
// Usage : GET load.php?slug=alice-dupont
// Réponse : JSON { name, klass, quizzes: { "maths-4": { attempts: [...] }, ... }, updatedAt }
//           ou { empty: true } si le fichier n'existe pas encore.
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-store');

$slug = strtolower(preg_replace('/[^a-z0-9\- ]/i', '', $_GET['slug'] ?? ''));
$slug = trim(preg_replace('/\s+/', '-', $slug));
if (!$slug || strlen($slug) > 60) { http_response_code(400); exit(json_encode(['error'=>'invalid_slug'])); }

$path = __DIR__ . '/data/' . $slug . '.json';
if (!file_exists($path)) { echo json_encode(['empty'=>true]); exit; }

$raw = @file_get_contents($path);
if ($raw === false) { http_response_code(500); exit(json_encode(['error'=>'fs'])); }
echo $raw;
