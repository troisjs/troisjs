import{l as e,a as r,M as a,d as t,S as o}from"./trois.module.cfd18ca8.js";import{r as s,o as n,c as f,w as i,a as d}from"./app.566ed3c6.js";import"./OrbitControls.82f2331b.js";const c={components:{Box:e,Camera:r,MatcapMaterial:a,Renderer:t,Scene:o},mounted(){const e=this.$refs.renderer,r=this.$refs.mesh.mesh;e.onBeforeRender((()=>{r.rotation.x+=.01}))}};c.render=function(e,r,a,t,o,c){const m=s("Camera"),l=s("MatcapMaterial"),p=s("Box"),u=s("Scene"),h=s("Renderer");return n(),f(h,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":""},{default:i((()=>[d(m,{position:{x:0,y:0,z:10}}),d(u,{background:"#ffffff"},{default:i((()=>[d(p,{ref:"mesh",size:3,rotation:{y:Math.PI/4,z:Math.PI/4}},{default:i((()=>[d(l,{name:"2E763A_78A0B7_B3D1CF_14F209"})])),_:1},8,["rotation"])])),_:1})])),_:1},512)};export default c;
