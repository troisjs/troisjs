import{a3 as e,_ as t}from"./OrbitControls.94891aa4.js";import{a as s,E as a,I as o,e as r,R as n,f as i,h as d,i as f,S as l,U as h}from"./trois.module.d1f63f33.js";import{r as c,o as m,c as p,w as u,b as S}from"./app.66f48fd8.js";const w={components:{Camera:s,EffectComposer:a,InstancedMesh:o,PhongMaterial:r,Renderer:n,RenderPass:i,SphereGeometry:d,SpotLight:f,Scene:l,UnrealBloomPass:h},setup:()=>({NUM_INSTANCES:2e3}),mounted(){const s=this.$refs.imesh.mesh,a=new e,{randFloat:o,randFloatSpread:r}=t;for(let e=0;e<this.NUM_INSTANCES;e++){a.position.set(r(200),r(200),r(200));const t=o(.2,1);a.scale.set(t,t,t),a.updateMatrix(),s.setMatrixAt(e,a.matrix)}s.instanceMatrix.needsUpdate=!0}};w.render=function(e,t,s,a,o,r){const n=c("Camera"),i=c("SpotLight"),d=c("SphereGeometry"),f=c("PhongMaterial"),l=c("InstancedMesh"),h=c("Scene"),w=c("RenderPass"),M=c("UnrealBloomPass"),g=c("EffectComposer"),y=c("Renderer");return m(),p(y,{ref:"renderer",resize:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05,autoRotate:!0},shadow:""},{default:u((()=>[S(n,{position:{y:100,z:100}}),S(h,null,{default:u((()=>[S(i,{color:"#ffffff",intensity:.5,position:{y:150,z:0},"cast-shadow":!0,"shadow-map-size":{width:1024,height:1024}},null,8,["intensity"]),S(i,{color:"#ff0000",intensity:.5,position:{y:-150,z:0},"cast-shadow":!0,"shadow-map-size":{width:1024,height:1024}},null,8,["intensity"]),S(l,{ref:"imesh",count:a.NUM_INSTANCES,"cast-shadow":!0,"receive-shadow":!0},{default:u((()=>[S(d,{radius:5}),S(f)])),_:1},8,["count"])])),_:1}),S(g,null,{default:u((()=>[S(w),S(M,{strength:2})])),_:1})])),_:1},8,["orbit-ctrl"])};export default w;