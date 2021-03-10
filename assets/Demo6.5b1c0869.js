import{s as t}from"./OrbitControls.97338009.js";import{s}from"./simplex-noise.d1c47b1d.js";import{x as e,r as i,o,c as r,w as n,b as l,F as h,l as a,y as d}from"./app.b14967d2.js";import{A as u,a as m,c,d as p,S as y,e as b,l as g}from"./trois.module.2e6ac9d5.js";const C=new s,x={components:{AmbientLight:u,Camera:m,PointLight:c,Renderer:p,Scene:y,StandardMaterial:b,Tube:g},data:()=>({tubes:[],light1Color:"#b307b5",light2Color:"#8132aa",light3Color:"#5737d0",light4Color:"#0d25bb"}),mounted(){this.renderer=this.$refs.renderer,this.mouse=this.renderer.three.mouse,this.size=this.renderer.three.size,this.initTubes(),this.renderer.onBeforeRender((()=>{const t=2e-4*Date.now();let s,e,i,o,r,n,l;for(let h=0;h<15;h++){s=this._points[h];for(let a=0;a<40;a++)e=this.x0+a*this.dx,o=.25*e,i=this.y0+h*this.dy,r=.25*i,n=.3*C.noise2D(o-t+.3*this.mouse.x,r-t+.3*this.mouse.y),l=.3*C.noise2D(r+t,o+t),s[a].x=e,s[a].y=i+n,s[a].z=l;this.$refs[this.tubes[h].key].updateCurve(s)}}))},methods:{initTubes(){this._points=[],this.tubes.splice(0),this.dx=this.size.wWidth/39,this.dy=this.size.wHeight/14,this.x0=-this.size.wWidth/2,this.y0=-this.size.wHeight/2;for(let s=0;s<15;s++){const e=[];this._points[s]=[];for(let i=0;i<40;i++){const o=new t(this.x0+i*this.dx,this.y0+s*this.dy,0);e.push(o),this._points[s].push(o.clone())}this.tubes.push({key:`tube-${s}`,points:e,radius:.1,tubularSegments:40,radialSegments:8})}},randomColors(){this.light1Color=e.random().hex(),this.light2Color=e.random().hex(),this.light3Color=e.random().hex(),this.light4Color=e.random().hex()}}};x.render=function(t,s,e,u,m,c){const p=i("Camera"),y=i("PointLight"),b=i("StandardMaterial"),g=i("Tube"),C=i("Scene"),x=i("Renderer");return o(),r(x,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0},"mouse-move":"",resize:"",onClick:c.randomColors},{default:n((()=>[l(p,{position:{z:5}}),l(C,{background:"#000000"},{default:n((()=>[l(y,{color:m.light1Color,position:{x:-2,y:-2,z:2},intensity:.5},null,8,["color","intensity"]),l(y,{color:m.light2Color,position:{x:-2,y:2,z:2},intensity:.5},null,8,["color","intensity"]),l(y,{color:m.light3Color,position:{x:2,y:2,z:2},intensity:.5},null,8,["color","intensity"]),l(y,{color:m.light4Color,position:{x:2,y:-2,z:2},intensity:.5},null,8,["color","intensity"]),(o(!0),r(h,null,a(m.tubes,(t=>(o(),r(g,d({ref:t.key},t),{default:n((()=>[l(b,{roughness:.4,metalness:1},null,8,["roughness"])])),_:2},1040)))),256))])),_:1})])),_:1},8,["onClick"])};export default x;
