import{o as n,c as a,d as s}from"./app.e8a5d5a3.js";const t='{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"New project","slug":"new-project"},{"level":2,"title":"Existing VueJS 3 project","slug":"existing-vuejs-3-project"},{"level":3,"title":"Vue plugin","slug":"vue-plugin"},{"level":3,"title":"Example","slug":"example"},{"level":3,"title":"Example without plugin","slug":"example-without-plugin"},{"level":2,"title":"Typescript","slug":"typescript"}],"relativePath":"guide/install.md","lastUpdated":1619634893476}',p={},e=s('<h1 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><div class="tip custom-block"><p class="custom-block-title">CDN</p><p>You don&#39;t need to install TroisJS to play with it, please read <a href="./cdn.html">how to use TroisJS via CDN</a>.</p></div><h2 id="new-project"><a class="header-anchor" href="#new-project" aria-hidden="true">#</a> New project</h2><p>Download the <a href="https://raw.githubusercontent.com/troisjs/troisjs.github.io/HEAD/src/public/assets/troisjs.zip" target="_blank" rel="noopener noreferrer">TroisJS/ViteJS Starter App</a>.</p><p>Unzip it, and :</p><div class="language-"><pre><code>cd troisjs\nnpm install\nnpm run dev\n</code></pre></div><p>Or :</p><div class="language-"><pre><code>cd troisjs\nyarn\nyarn dev\n</code></pre></div><h2 id="existing-vuejs-3-project"><a class="header-anchor" href="#existing-vuejs-3-project" aria-hidden="true">#</a> Existing VueJS 3 project</h2><p><code>npm install three@0.127 troisjs</code></p><p>Or <code>yarn add three@0.127 troisjs</code></p><h3 id="vue-plugin"><a class="header-anchor" href="#vue-plugin" aria-hidden="true">#</a> Vue plugin</h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TroisJSVuePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;troisjs&#39;</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>TroisJSVuePlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Don&#39;t use the plugin if you need tree shaking and typescript support.</p></div><h3 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Renderer</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Camera</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scene</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ y: 50, z: 50 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Box</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ y: Math.PI / 4, z: Math.PI / 4 }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LambertMaterial</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Box</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scene</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>renderer<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>box<span class="token punctuation">.</span>mesh<span class="token punctuation">;</span>\n    renderer<span class="token punctuation">.</span><span class="token function">onBeforeRender</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      box<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="example-without-plugin"><a class="header-anchor" href="#example-without-plugin" aria-hidden="true">#</a> Example without plugin</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Camera</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scene</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ y: 50, z: 50 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Box</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LambertMaterial</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Box</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scene</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Box<span class="token punctuation">,</span> Camera<span class="token punctuation">,</span> LambertMaterial<span class="token punctuation">,</span> PointLight<span class="token punctuation">,</span> Renderer<span class="token punctuation">,</span> Scene <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;troisjs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span> Box<span class="token punctuation">,</span> Camera<span class="token punctuation">,</span> LambertMaterial<span class="token punctuation">,</span> PointLight<span class="token punctuation">,</span> Renderer<span class="token punctuation">,</span> Scene <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="typescript"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript</h2><p>TroisJS v0.3 has been rewrites using Typescript, if you want to have a good support :</p><ul><li>Use Visual Studio Code, with Volar extension : <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar</a></li><li>Read this : <a href="https://v3.vuejs.org/guide/typescript-support.html" target="_blank" rel="noopener noreferrer">https://v3.vuejs.org/guide/typescript-support.html</a></li><li>Don&#39;t use TroisJS plugin and import the components</li></ul>',21);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
