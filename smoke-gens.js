const fs=require('fs'),path=require('path'),babel=require('@babel/core');
function mulberry32(s){let t=s>>>0;return()=>{t=(t+0x6D2B79F5)>>>0;let r=Math.imul(t^(t>>>15),1|t);r=(r+Math.imul(r^(r>>>7),61|r))^r;return((r^(r>>>14))>>>0)/4294967296};}
function ser(n){if(n==null||n===false)return '';if(typeof n==='string'||typeof n==='number')return String(n);if(Array.isArray(n))return n.map(ser).join('');if(typeof n==='object'&&n.props){const c=n.props.children;if(c==null)return '';return ser(c);}return '';}
global.React={createElement:(t,p,...c)=>({type:t,props:{...(p||{}),children:c.length===1?c[0]:c}}),Fragment:'F'};
global.window={ALL_QUIZZES:{}};
global.F=({n,d})=>({type:'F',props:{children:ser(n)+'/'+ser(d)}});
global.M=({children})=>({type:'M',props:{children}});
const files=fs.readdirSync('quizzes').filter(f=>/\.tsx$/.test(f)).sort();
let totalGens=0, crashes=[], dupOpts=[];
for(const f of files){
  const src=fs.readFileSync(path.join('quizzes',f),'utf8');
  let compiled;
  try{ compiled=babel.transformSync(src,{presets:[[require.resolve('@babel/preset-typescript'),{isTSX:true,allExtensions:true}],require.resolve('@babel/preset-react')],filename:f}).code; }
  catch(e){ crashes.push(f+' BABEL: '+e.message.split('\n')[0]); continue; }
  global.window.ALL_QUIZZES={};
  try{ new Function('window','React','F','M',compiled)(global.window,global.React,global.F,global.M); }
  catch(e){ crashes.push(f+' EXEC: '+e.message.split('\n')[0]); continue; }
  const key=Object.keys(global.window.ALL_QUIZZES)[0];
  const cfg=global.window.ALL_QUIZZES[key];
  for(const[dk,pool] of Object.entries(cfg.POOL)){
    for(const q of pool){
      if(typeof q.gen!=='function')continue;
      totalGens++;
      for(let i=0;i<50;i++){
        const seed=(i*2654435761)>>>0;
        try{
          const r=q.gen(mulberry32(seed));
          if(!r||!Array.isArray(r.options)||r.options.length!==4){crashes.push(f+' '+dk+' '+q.key+' bad options shape');break;}
          const sopts=r.options.map(ser);
          const set=new Set(sopts);
          if(set.size!==4){dupOpts.push(f+' '+dk+' '+q.key+' seed='+seed+' opts='+JSON.stringify(sopts));break;}
          if(r.correct<0||r.correct>3){crashes.push(f+' '+dk+' '+q.key+' bad correct='+r.correct);break;}
        }catch(e){crashes.push(f+' '+dk+' '+q.key+' seed='+seed+': '+e.message.split('\n')[0]);break;}
      }
    }
  }
}
console.log('Gens testés:',totalGens,'(50 seeds chacun)');
console.log('Crashes:',crashes.length);
crashes.slice(0,30).forEach(c=>console.log(' ',c));
console.log('Options dupliquées:',dupOpts.length);
dupOpts.slice(0,30).forEach(c=>console.log(' ',c));
