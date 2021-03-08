import{s as t,an as e,m as s,ap as a,ao as i}from"./OrbitControls.97338009.js";import{a as r,D as o,E as n,F as m,I as h,c as l,d as c,g as d,n as u,S as p,U as y}from"./trois.module.3990f623.js";import{x as f,r as S,o as C,c as g,w as M,b as N}from"./app.0c11a873.js";const{randFloat:A,randFloatSpread:b}=i,x={components:{Camera:r,DodecahedronGeometry:o,EffectComposer:n,FXAAPass:m,InstancedMesh:h,PointLight:l,Renderer:c,RenderPass:d,SubSurfaceMaterial:u,Scene:p,UnrealBloomPass:y},setup(){const s=[],a=f.scale(["#dd3e1b","#0b509c"]),i=new t,r=new e,o=new t;for(let e=0;e<2e3;e++)s.push({position:new t(b(200),b(200),b(200)),scale:A(.2,1),velocity:new t(b(2),b(2),b(2)),attraction:.0025+A(0,.01),vlimit:.3+A(0,.2)});return{NUM_INSTANCES:2e3,instances:s,cscale:a,target:i,dummyO:r,dummyV:o}},mounted(){this.renderer=this.$refs.renderer,this.imesh=this.$refs.imesh.mesh,this.light=this.$refs.light.light,this.init()},methods:{init(){for(let t=0;t<this.NUM_INSTANCES;t++){const{position:e,scale:s}=this.instances[t];this.dummyO.position.copy(e),this.dummyO.scale.set(s,s,s),this.dummyO.updateMatrix(),this.imesh.setMatrixAt(t,this.dummyO.matrix)}this.updateColors(),this.imesh.instanceMatrix.needsUpdate=!0,this.renderer.onBeforeRender(this.animate)},animate(){this.target.copy(this.renderer.three.mouseV3),this.light.position.copy(this.target);for(let t=0;t<this.NUM_INSTANCES;t++){const{position:e,scale:s,velocity:a,attraction:i,vlimit:r}=this.instances[t];this.dummyV.copy(this.target).sub(e).normalize().multiplyScalar(i),a.add(this.dummyV).clampScalar(-r,r),e.add(a),this.dummyO.position.copy(e),this.dummyO.scale.set(s,s,s),this.dummyO.lookAt(this.dummyV.copy(e).add(a)),this.dummyO.updateMatrix(),this.imesh.setMatrixAt(t,this.dummyO.matrix)}this.imesh.instanceMatrix.needsUpdate=!0},randomColors(){const t=f.random(),e=f.random();this.cscale=f.scale([t,e]),this.updateColors()},updateColors(){const t=[];for(let e=0;e<this.NUM_INSTANCES;e++){const e=new s(this.cscale(A(0,1)).hex());t.push(e.r,e.g,e.b)}this.imesh.geometry.setAttribute("color",new a(new Float32Array(t),3))}}};x.render=function(t,e,s,a,i,r){const o=S("Camera"),n=S("PointLight"),m=S("DodecahedronGeometry"),h=S("SubSurfaceMaterial"),l=S("InstancedMesh"),c=S("Scene"),d=S("RenderPass"),u=S("UnrealBloomPass"),p=S("FXAAPass"),y=S("EffectComposer"),f=S("Renderer");return C(),g(f,{ref:"renderer",resize:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05},"mouse-move":"","mouse-raycast":"",onClick:r.randomColors},{default:M((()=>[N(o,{position:{z:200}}),N(c,null,{default:M((()=>[N(n,{ref:"light",color:"#FFC0C0"},null,512),N(l,{ref:"imesh",count:a.NUM_INSTANCES},{default:M((()=>[N(m,{radius:5}),N(h,{"vertex-colors":""})])),_:1},8,["count"])])),_:1}),N(y,null,{default:M((()=>[N(d),N(u,{strength:.5},null,8,["strength"]),N(p)])),_:1})])),_:1},8,["orbit-ctrl","onClick"])};export default x;