import{am as e}from"./OrbitControls.82f2331b.js";import{A as s,a as t,E as r,F as a,G as o,d as n,p as i,c as l,q as p,g as u,S as d,n as c,e as h,o as f,U as g}from"./trois.module.cfd18ca8.js";import{r as m,o as x,c as P,w as _,a as y,y as L}from"./app.566ed3c6.js";const z={components:{AmbientLight:s,Camera:t,EffectComposer:r,FXAAPass:a,Group:o,Renderer:n,Plane:i,PointLight:l,RectAreaLight:p,RenderPass:u,Scene:d,Sphere:c,StandardMaterial:h,Texture:f,UnrealBloomPass:g},data:()=>({texturesProps:{repeat:{x:10,y:10},wrapS:e,wrapT:e},rectLightsProps:{rotation:{x:-Math.PI/2},intensity:5,width:2,height:5,helper:!0}}),mounted(){}};z.render=function(e,s,t,r,a,o){const n=m("Camera"),i=m("Sphere"),l=m("PointLight"),p=m("RectAreaLight"),u=m("Texture"),d=m("StandardMaterial"),c=m("Plane"),h=m("Group"),f=m("Scene"),g=m("RenderPass"),z=m("UnrealBloomPass"),A=m("FXAAPass"),M=m("EffectComposer"),S=m("Renderer");return x(),P(S,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":""},{default:_((()=>[y(n,{position:{x:0,y:0,z:10}}),y(f,{background:"#000000"},{default:_((()=>[y(h,{rotation:{x:-Math.PI/2,y:0,z:0}},{default:_((()=>[y(l,{intensity:.5,position:{x:0,y:0,z:5}},{default:_((()=>[y(i,{radius:.1},null,8,["radius"])])),_:1},8,["intensity"]),y(p,L({color:"#ff6000",position:{x:0,y:10,z:1}},a.rectLightsProps),null,16),y(p,L({color:"#0060ff",position:{x:-5,y:10,z:1}},a.rectLightsProps),null,16),y(p,L({color:"#60ff60",position:{x:5,y:10,z:1}},a.rectLightsProps),null,16),y(c,{width:30,height:30,rotation:{x:0},position:{z:-3}},{default:_((()=>[y(d,{"displacement-scale":.2,roughness:0,metalness:0},{default:_((()=>[y(u,L(a.texturesProps,{src:"/assets/textures/Wood_Tiles_002_basecolor.jpg"}),null,16),y(u,L(a.texturesProps,{src:"/assets/textures/Wood_Tiles_002_height.png",id:"displacementMap"}),null,16),y(u,L(a.texturesProps,{src:"/assets/textures/Wood_Tiles_002_normal.jpg",id:"normalMap"}),null,16),y(u,L(a.texturesProps,{src:"/assets/textures/Wood_Tiles_002_roughness.jpg",id:"roughnessMap"}),null,16),y(u,L(a.texturesProps,{src:"/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",id:"aoMap"}),null,16)])),_:1},8,["displacement-scale"])])),_:1})])),_:1},8,["rotation"])])),_:1}),y(M,null,{default:_((()=>[y(g),y(z,{strength:.3},null,8,["strength"]),y(A)])),_:1})])),_:1},512)};export default z;
