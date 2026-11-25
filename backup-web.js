'use strict';
const file=document.getElementById('sessionFile'), save=document.getElementById('save'), status=document.getElementById('status');
let selected=null,revision=0;
function message(value,kind=''){status.textContent=value;status.className=kind;}
file.addEventListener('change',async()=>{
 const seq=++revision, f=file.files[0];selected=null;save.disabled=true;
 if(!f){message('Choose your exported session to begin.');return;}
 message('Checking session file…');
 try{
  if(f.size>50*1024*1024)throw Error('Session JSON exceeds the 50 MB browser limit. Use the desktop edition.');
  const doc=JSON.parse((await f.text()).replace(/^\uFEFF/,''));
  if(!doc||typeof doc.session!=='object'||!Array.isArray(doc.session?.scenes))throw Error('Choose a MELD session JSON saved using File → Export Session.');
  if(seq!==revision)return;
  selected=f;save.disabled=false;
  message(`${f.name} · ${doc.session.scenes.length} Main scenes. Ready to save an exact backup.`,`ok`);
 }catch(e){if(seq===revision)message(e.message,'err');}
});
save.addEventListener('click',()=>{
 if(!selected)return;
 const stamp=new Date().toISOString().replace(/[:.]/g,'-');
 const name=selected.name.replace(/\.json$/i,'')+'-Backup-'+stamp+'.json';
 const url=URL.createObjectURL(selected),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
 message('Backup download requested. Check your browser downloads. Original file unchanged.','ok');
});
