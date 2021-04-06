import{a3 as e,r as s,_ as t,ao as a}from"./OrbitControls.94891aa4.js";import{A as o,a as r,E as n,F as i,I as h,e as l,R as d,f as p,S as m,n as f,h as c,i as u,U as C}from"./trois.module.d1f63f33.js";import{C as g,n as w}from"./100.8443bcaa.js";import{r as y,o as S,c as A,w as M,b as U,F as b,l as P}from"./app.66f48fd8.js";const{randFloat:x,randFloatSpread:O}=t,z={components:{AmbientLight:o,Camera:r,CannonWorld:g,EffectComposer:n,FXAAPass:i,InstancedMesh:h,PhongMaterial:l,Renderer:d,RenderPass:p,Scene:m,Sphere:f,SphereGeometry:c,SpotLight:u,UnrealBloomPass:C},setup:()=>({COUNT:250}),methods:{onBeforeStep(){const e=new a,s=this.$refs.renderer.three.pointer.positionV3;this.imesh.userData.bodies.forEach((t=>{e.copy(s).sub(t.position).normalize().multiplyScalar(.5),e.clampScalar(-.5,.5),t.force.copy(e)}))},initIMesh(t){this.imesh=t;const a=new e,o=new s,r=new Array(this.COUNT),n=new Array(this.COUNT),i=new Array(this.COUNT).fill().map((()=>w[20][Math.floor(x(0,5))]));for(let e=0;e<this.COUNT;e++){a.position.set(O(2),O(2),O(2));const s=x(.2,1);r[e]=s,n[e]=s,a.scale.set(s,s,s),a.updateMatrix(),t.setMatrixAt(e,a.matrix),t.setColorAt(e,o.set(i[e]))}t.instanceMatrix.needsUpdate=!0,t.userData.scales=r,t.userData.masses=n,t.userData.damping=.1},randomColors(){const e=Math.floor(x(0,100)),t=new s,a=new Array(this.COUNT).fill().map((()=>w[e][Math.floor(x(0,5))]));for(let s=0;s<this.COUNT;s++)this.imesh.setColorAt(s,t.set(a[s]));this.imesh.instanceColor.needsUpdate=!0}}};z.render=function(e,s,t,a,o,r){const n=y("Camera"),i=y("AmbientLight"),h=y("SpotLight"),l=y("SphereGeometry"),d=y("PhongMaterial"),p=y("InstancedMesh"),m=y("Sphere"),f=y("CannonWorld"),c=y("Scene"),u=y("RenderPass"),C=y("UnrealBloomPass"),g=y("FXAAPass"),w=y("EffectComposer"),x=y("Renderer");return S(),A(x,{ref:"renderer",pointer:"",resize:"",shadow:"",onClick:r.randomColors},{default:M((()=>[U(n,{position:{z:2.5}},null,8,["position"]),U(c,{background:"white"},{default:M((()=>[U(i,{color:"#505050"}),U(h,{color:"#ffffff",intensity:.5,position:{x:0,y:3,z:2},angle:Math.PI/8,penumbra:.1,"cast-shadow":"","shadow-map-size":{width:2048,height:2048}},null,8,["intensity","angle","penumbra"]),U(h,{color:"#ff0000",intensity:.5,position:{x:0,y:-3,z:2},angle:Math.PI/8,penumbra:.1,"cast-shadow":"","shadow-map-size":{width:2048,height:2048}},null,8,["intensity","angle","penumbra"]),U(f,{gravity:{x:0,y:0,z:0},onBeforeStep:r.onBeforeStep},{default:M((()=>[U(p,{ref:"imeshC",count:a.COUNT,onCreated:r.initIMesh,"cast-shadow":"","receive-shadow":""},{default:M((()=>[U(l,{radius:.1,"width-segments":16,"height-segments":16},null,8,["radius"]),U(d)])),_:1},8,["count","onCreated"]),(S(),A(b,null,P(3,(e=>U(m,{key:`sphere-${e}`,radius:.25,position:{x:e-2},"width-segments":16,"height-segments":16,"receive-shadow":""},{default:M((()=>[U(d)])),_:2},1032,["radius","position"]))),64))])),_:1},8,["onBeforeStep"])])),_:1}),U(w,null,{default:M((()=>[U(u),U(C,{strength:.5,threshold:.99},null,8,["strength","threshold"]),U(g)])),_:1})])),_:1},8,["onClick"])};export default z;
