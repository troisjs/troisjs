import{A as t,B as e,f as s,E as i,F as r,m as a,n,h,i as o,o as d,j as l,u as m,v as u,p as f}from"./trois.module.92dce458.js";import{s as c}from"./simplex-noise.ccb764ce.js";import{r as p,o as y,c as N,w as P,b as I}from"./app.5e8965c6.js";const x=new c,A={components:{AmbientLight:t,BoxGeometry:e,Camera:s,EffectComposer:i,FXAAPass:r,InstancedMesh:a,PhongMaterial:n,PointLight:h,Renderer:o,RenderPass:d,Scene:l,TiltShiftPass:m},setup:()=>({SIZE:1.6,NX:25,NY:25,PADDING:1,SIZEP:2.6,W:64,H:64,NUM_INSTANCES:625}),data:()=>({tiltRadius:100,tiltY:100}),computed:{tiltStart(){return{x:0,y:this.tiltY}},tiltEnd(){return{x:100,y:this.tiltY}}},mounted(){this.renderer=this.$refs.renderer,this.size=this.renderer.three.size,this.imesh=this.$refs.imesh.mesh;const t=[];for(let e=0;e<this.NUM_INSTANCES;e++){const e=Math.random();t.push(e,e,e)}this.imesh.geometry.setAttribute("color",new u(new Float32Array(t),3)),this.tiltRadius=this.size.height/3,this.tiltY=this.size.height/2,this.renderer.onResize(this.updateTilt),this.dummy=new f,this.renderer.onBeforeRender(this.animate)},methods:{animate(){this.updateInstanceMatrix()},updateTilt({positionN:t}){this.tiltRadius=this.size.height/3,this.tiltY=.5*(t.y+1)*this.size.height},updateInstanceMatrix(){const t=-this.W/2+this.PADDING,e=-this.H/2+this.PADDING,s=1e-4*Date.now();let i,r,a,n,h,o;for(let d=0;d<this.NX;d++)for(let l=0;l<this.NY;l++)i=t+d*this.SIZEP,r=e+l*this.SIZEP,a=.005*i,n=.005*r,h=x.noise3D(a,n,s)*Math.PI,o=x.noise3D(n,a,s)*Math.PI,this.dummy.position.set(i,r,-10),this.dummy.rotation.set(h,o,0),this.dummy.updateMatrix(),this.imesh.setMatrixAt(d*this.NY+l,this.dummy.matrix);this.imesh.instanceMatrix.needsUpdate=!0}}};A.render=function(t,e,s,i,r,a){const n=p("Camera"),h=p("AmbientLight"),o=p("PointLight"),d=p("BoxGeometry"),l=p("PhongMaterial"),m=p("InstancedMesh"),u=p("Scene"),f=p("RenderPass"),c=p("FXAAPass"),x=p("TiltShiftPass"),A=p("EffectComposer"),M=p("Renderer");return y(),N(M,{ref:"renderer",resize:"",pointer:{onMove:a.updateTilt}},{default:P((()=>[I(n,{position:{y:-20,z:10},"look-at":{x:0,y:0,z:0}}),I(u,{background:"#ffffff"},{default:P((()=>[I(h),I(o,{ref:"light",position:{y:0,z:20}},null,512),I(m,{ref:"imesh",count:i.NUM_INSTANCES,position:{y:20,z:10}},{default:P((()=>[I(d,{size:i.SIZE},null,8,["size"]),I(l,{"vertex-colors":""})])),_:1},8,["count"])])),_:1}),I(A,null,{default:P((()=>[I(f),I(c),I(x,{"gradient-radius":r.tiltRadius,start:{x:0,y:this.tiltY},end:{x:100,y:this.tiltY}},null,8,["gradient-radius","start","end"])])),_:1})])),_:1},8,["pointer"])};export default A;
