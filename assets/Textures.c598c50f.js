import{A as e,a as s,d as t,c as r,S as a,m as i,e as n,n as o}from"./trois.module.c1a598e6.js";import{r as d,o as l,c,w as m,a as p}from"./app.99386eb2.js";import"./OrbitControls.9727ee0a.js";const u={components:{AmbientLight:e,Camera:s,Renderer:t,PointLight:r,Scene:a,Sphere:i,StandardMaterial:n,Texture:o},mounted(){const e=this.$refs.renderer,s=this.$refs.mesh.mesh;e.onBeforeRender((()=>{s.rotation.x+=.01,s.rotation.y+=.011}))}};u.render=function(e,s,t,r,a,i){const n=d("Camera"),o=d("AmbientLight"),u=d("PointLight"),_=d("Texture"),h=d("StandardMaterial"),g=d("Sphere"),f=d("Scene"),x=d("Renderer");return l(),c(x,{ref:"renderer",antialias:"","orbit-ctrl":""},{default:m((()=>[p(n,{position:{z:10}}),p(f,{background:"#000000"},{default:m((()=>[p(o,{intensity:.5},null,8,["intensity"]),p(u,{position:{y:50,z:0}}),p(u,{color:"#ff6000",intensity:.75,position:{y:-50,z:0}},null,8,["intensity"]),p(g,{ref:"mesh",radius:2.5,"width-segments":200,"height-segments":200},{default:m((()=>[p(h,{"displacement-scale":.2},{default:m((()=>[p(_,{src:"/assets/textures/Wood_Tiles_002_basecolor.jpg"}),p(_,{src:"/assets/textures/Wood_Tiles_002_height.png",id:"displacementMap"}),p(_,{src:"/assets/textures/Wood_Tiles_002_normal.jpg",id:"normalMap"}),p(_,{src:"/assets/textures/Wood_Tiles_002_roughness.jpg",id:"roughnessMap"}),p(_,{src:"/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",id:"aoMap"})])),_:1},8,["displacement-scale"])])),_:1},8,["radius"])])),_:1})])),_:1},512)};export default u;