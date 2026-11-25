'use strict';
(()=>{
 const routes={home:'index.html',portable:'portable.html',merge:'production-merge.html',export:'production-manager.html'};
 const names={home:'Home',portable:'Backups & Portable',merge:'Import & Merge',export:'Export Scenes'};
 const current=Object.keys(routes).find(k=>routes[k]===(location.pathname.split('/').pop()||'index.html'))||'home';
 function keyForLink(a){
  if(!a||a.hasAttribute('download')||a.target&&a.target!=='_self')return null;
  const u=new URL(a.href,location.href);
  if(u.origin!==location.origin||u.pathname.slice(0,u.pathname.lastIndexOf('/'))!==location.pathname.slice(0,location.pathname.lastIndexOf('/')))return null;
  return Object.keys(routes).find(k=>routes[k]===u.pathname.split('/').pop())||null;
 }
 function intercept(e,open){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const key=keyForLink(e.target.closest?.('a[href]'));if(key){e.preventDefault();open(key);}}
 if(current!=='home'){
  if(window.self===window.top){location.replace('index.html#'+current);return;}
  if(window.parent.ToolboxWorkspace){document.documentElement.classList.add('workspace-embedded');document.addEventListener('click',e=>intercept(e,k=>window.parent.ToolboxWorkspace.open(k)));}
  return;
 }
 const home=document.getElementById('workspace-home'),deck=document.getElementById('workspace-deck');
 if(!home||!deck)return;
 const frames=new Map();let active=null;
 function show(key){
  if(!Object.hasOwn(routes,key))key='home';
  if(active===key)return;
  if(key!=='home'&&!frames.has(key)){
   const f=document.createElement('iframe');f.title=names[key];f.className='workspace-frame';f.hidden=true;f.src=routes[key]+'?v=0912';frames.set(key,f);deck.append(f);
  }
  home.hidden=key!=='home';deck.hidden=key==='home';
  for(const [k,f] of frames)f.hidden=k!==key;
  for(const a of document.querySelectorAll('.topbar nav a')){if(keyForLink(a)===key)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
  document.title=key==='home'?'MELD Toolbox':'MELD Toolbox | '+names[key];active=key;
 }
 function open(key){if(!Object.hasOwn(routes,key))return;if(location.hash!=='#'+key)history.pushState(null,'','#'+key);show(key);}
 window.ToolboxWorkspace=Object.freeze({open});
 document.documentElement.classList.add('workspace-active');
 document.addEventListener('click',e=>intercept(e,open));
 const sync=()=>show(location.hash.slice(1)||'home');window.addEventListener('popstate',sync);window.addEventListener('hashchange',sync);
 document.getElementById('workspace-reset').onclick=()=>{if(confirm('Clear all loaded files, selections and previews in this tab? Download any results you need first.')){history.replaceState(null,'','#home');location.reload();}};
 sync();
})();
