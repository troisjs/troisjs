import{s as n,n as a}from"./app.acbcb5bf.js";function e(n,a){a instanceof Object&&Object.entries(a).forEach((([a,e])=>{n[a]=e}))}function t(t,c,o,s){s||(s=c);const f=n(t,c);f.value instanceof Object?(e(o[s],f.value),a(f,(n=>{e(o[s],n)}),{deep:!0})):(f.value&&(o[s]=t[c]),a(f,(n=>{o[s]=n})))}function c(n,a,e){return n+(a-n)*(e=(e=e<0?0:e)>1?1:e)}function o(n,a,e){n.x=c(n.x,a.x,e),n.y=c(n.y,a.y,e)}export{o as a,t as b,c as l};