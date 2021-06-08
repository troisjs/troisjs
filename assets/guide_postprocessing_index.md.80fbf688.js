import{o as s,c as a,d as n}from"./app.b0ad6587.js";const t='{"title":"Postprocessing","description":"","frontmatter":{},"headers":[{"level":3,"title":"Example","slug":"example"}],"relativePath":"guide/postprocessing/index.md","lastUpdated":1623174256041}',e={},p=n('<h1 id="postprocessing"><a class="header-anchor" href="#postprocessing" aria-hidden="true">#</a> Postprocessing</h1><p>You can use <code>EffectComposer</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/EffectComposer.ts" target="_blank" rel="noopener noreferrer">source</a>) to easily add post processing effects.</p><p>Passes :</p><ul><li><code>BokehPass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/BokehPass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li><li><code>FilmPass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/FilmPass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li><li><code>FXAAPass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/FXAAPass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li><li><code>HalftonePass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/HalftonePass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li><li><code>Renderpass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/Renderpass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li><li><code>SMAAPass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/SMAAPass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li><li><code>UnrealBloomPass</code> (<a href="https://github.com/troisjs/trois/blob/master/src/effects/UnrealBloomPass.ts" target="_blank" rel="noopener noreferrer">source</a>)</li></ul><h3 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Camera</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scene</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ z: 50 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Box</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LambertMaterial</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Box</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scene</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EffectComposer</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RenderPass</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UnrealBloomPass</span> <span class="token attr-name">:strength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HalftonePass</span> <span class="token attr-name">:radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:scatter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EffectComposer</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',6);e.render=function(n,t,e,o,c,l){return s(),a("div",null,[p])};export default e;export{t as __pageData};