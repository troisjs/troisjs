import{A as o,a as e,c as r,d as t,S as s,s as a,t as n}from"./trois.module.a7c53107.js";import{x as i,r as l,o as f,c,w as d,b as m,F as u,l as b}from"./app.8b9f0c66.js";import"./OrbitControls.97338009.js";const h={components:{AmbientLight:o,Camera:e,PointLight:r,Renderer:t,Scene:s,ToonMaterial:a,Torus:n},data:()=>({n:30,cscale:i.scale(["#dd3e1b","#0b509c"])}),mounted(){this.$refs.renderer.onBeforeRender((()=>{const o=Date.now();let e,r;for(let t=1;t<=this.n;t++)e=this.$refs["mesh"+t].mesh,r=o-500*t,e.rotation.x=15e-5*r,e.rotation.y=2e-4*r,e.rotation.z=17e-5*r}))},methods:{color(o){return this.cscale(o/this.n).css()},onClick(o){this.cscale=i.scale([i.random(),i.random(),i.random()])}}};h.render=function(o,e,r,t,s,a){const n=l("Camera"),i=l("AmbientLight"),h=l("PointLight"),p=l("ToonMaterial"),g=l("Torus"),C=l("Scene"),k=l("Renderer");return f(),c(k,{ref:"renderer",antialias:"",resize:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05},onClick:a.onClick},{default:d((()=>[m(n,{position:{z:15}}),m(C,{background:"#ffffff"},{default:d((()=>[m(i,{color:"#808080"}),m(h,{color:"#ffffff",position:{y:50,z:0}}),m(h,{color:"#ffffff",position:{y:-50,z:0}}),m(h,{color:"#ffffff",position:{y:0,z:0}}),(f(!0),c(u,null,b(s.n,(o=>(f(),c(g,{key:o,ref:`mesh${o}`,radius:.2*o,tube:.1,"radial-segments":8,"tubular-segments":4*(o+2)},{default:d((()=>[m(p,{color:a.color(o)},null,8,["color"])])),_:2},1032,["radius","tube","tubular-segments"])))),128))])),_:1})])),_:1},8,["orbit-ctrl","onClick"])};export default h;
