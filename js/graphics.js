const paths={
 search:'<circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 5 5"/>',
 bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
 book:'<path d="M3 4h7l2 2 2-2h7v15h-7l-2 2-2-2H3zM12 6v15"/>',
 atom:'<ellipse cx="12" cy="12" rx="11" ry="4.3" transform="rotate(55 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.3" transform="rotate(-55 12 12)"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>',
 scan:'<path d="M3 8V3h5m8 0h5v5M3 16v5h5m8 0h5v-5M2 12h20"/><circle cx="12" cy="12" r="6"/>',
 wave:'<path d="M2 12h3l3-8 5 16 3-12 3 4h3"/>',
 shield:'<path d="m12 2 9 4v6c0 5-5 8-9 10-4-2-9-5-9-10V6z"/><path d="m8 12 3 3 5-6"/>',
 reactor:'<path d="M5 21c3-5 4-11 3-16h8c-1 5 0 11 3 16zM8 5h8M4 21h16M10 2h4"/>',
 chart:'<path d="M3 3v18h18M6 16l4-6 4 3 6-9"/>',
 grid:'<rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
 globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
 filter:'<path d="M3 6h18M6 12h12M9 18h6"/>',
 close:'<path d="m5 5 14 14M5 19 19 5"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 plus:'<path d="M12 4v16M4 12h16"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
 external:'<path d="M13 3h8v8M21 3 10 14M10 3H3v18h18v-7"/>',
 eye:'<path d="M2 12c5-9 15-9 20 0-5 9-15 9-20 0z"/><circle cx="12" cy="12" r="3"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
 layers:'<path d="m2 7 10-5 10 5-10 5zM2 12l10 5 10-5M2 17l10 5 10-5"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>'
};
export const icon=(name,cls="")=>'<svg class="icon '+cls+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[name]||paths.atom)+'</svg>';
let seq=0;
export function fieldArt(type="fisica",hero=false){
 const id="field-"+(++seq);let lines="";
 const p=(x,y)=>x.toFixed(1)+","+y.toFixed(1);
 if(type==="medicina"){
  for(let i=0;i<20;i++)lines+='<ellipse cx="320" cy="'+(130+15*i)+'" rx="'+(60+76*Math.sin(i/19*Math.PI))+'" ry="28"/>';
  lines+='<path d="M100 280h440M320 75v420" stroke-dasharray="3 9"/><circle cx="320" cy="280" r="185" opacity=".4"/>';
 }else if(type==="investigacion"||type==="instrumentacion"){
  for(let k=0;k<19;k++){
   const points=[];for(let x=70;x<=575;x+=4)points.push(p(x,220+k*6+Math.sin(x/28+k*.22)*Math.exp(-(((x-320)/150)**2))*112));
   lines+='<polyline points="'+points.join(" ")+'" opacity="'+(.3+k*.03)+'"/>';
  }
 }else{
  const project=(t,f)=>{const x=(153+60*Math.cos(t))*Math.cos(f),y=(153+60*Math.cos(t))*Math.sin(f),z=60*Math.sin(t);return p(320+x*.95+(y*Math.sin(.94)+z*Math.cos(.94))*.25,280+(y*Math.cos(.94)-z*Math.sin(.94))*.96);};
  const slices=hero?38:24;
  for(let i=0;i<slices;i++){const points=[];for(let j=0;j<=64;j++)points.push(project(j/64*Math.PI*2,i/slices*Math.PI*2));lines+='<polyline points="'+points.join(" ")+'" opacity=".7"/>';}
  for(let i=0;i<12;i++){const points=[];for(let j=0;j<=96;j++)points.push(project(i/12*Math.PI*2,j/96*Math.PI*2));lines+='<polyline points="'+points.join(" ")+'" opacity=".6"/>';}
 }
 return '<svg class="'+(hero?"hero-field":"field-art")+'" viewBox="0 0 640 560" fill="none" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="80" y1="80" x2="530" y2="480" gradientUnits="userSpaceOnUse"><stop stop-color="#d1f3dc"/><stop offset=".5" stop-color="#81c5b3"/><stop offset="1" stop-color="#487a82"/></linearGradient></defs><g stroke="#7ba998" opacity=".16"><circle cx="320" cy="280" r="240" stroke-dasharray="2 9"/><path d="M320 24v32m0 448v32M65 280h32m446 0h32"/></g><g stroke="url(#'+id+')" stroke-width="'+(hero?1:1.5)+'">'+lines+'</g></svg>';
}
