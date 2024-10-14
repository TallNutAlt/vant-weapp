(self.webpackChunk=self.webpackChunk||[]).push([["9737"],{8254:function(s,n,a){"use strict";a.r(n);var t=a("7059");let d=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Switch \u5F00\u5173</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u5728\u6253\u5F00\u548C\u5173\u95ED\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-switch&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/switch/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ checked }}&quot;</span> <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,\n  },\n\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">{ detail }</span>) {\n    <span class="hljs-comment">// \u9700\u8981\u624B\u52A8\u5BF9 checked \u72B6\u6001\u8FDB\u884C\u66F4\u65B0</span>\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({ <span class="hljs-attr">checked</span>: detail });\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">\u7981\u7528\u72B6\u6001</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ checked }}&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">\u52A0\u8F7D\u72B6\u6001</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ checked }}&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u5927\u5C0F</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ checked }}&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span>\n  <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ checked }}&quot;</span>\n  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#07c160&quot;</span>\n  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yi-bu-kong-zhi" tabindex="-1">\u5F02\u6B65\u63A7\u5236</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ checked }}&quot;</span> <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,\n  },\n\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">{ detail }</span>) {\n    wx.<span class="hljs-title function_">showModal</span>({\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,\n      <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F&#x27;</span>,\n      <span class="hljs-attr">success</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        <span class="hljs-keyword">if</span> (res.<span class="hljs-property">confirm</span>) {\n          <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({ <span class="hljs-attr">checked2</span>: detail });\n        }\n      },\n    });\n  },\n});\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>\u5728\u8868\u5355\u5185\u63D0\u4EA4\u65F6\u7684\u6807\u8BC6\u7B26</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>\u5F00\u5173\u9009\u4E2D\u72B6\u6001</td>\n<td><em>any</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5F00\u5173\u5C3A\u5BF8</td>\n<td><em>string</em></td>\n<td><code>30px</code></td>\n</tr>\n<tr>\n<td>active-color</td>\n<td>\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>inactive-color</td>\n<td>\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td>\n<td><em>string</em></td>\n<td><code>#fff</code></td>\n</tr>\n<tr>\n<td>active-value</td>\n<td>\u6253\u5F00\u65F6\u7684\u503C</td>\n<td><em>any</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>inactive-value</td>\n<td>\u5173\u95ED\u65F6\u7684\u503C</td>\n<td><em>any</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bind:change</td>\n<td>\u5F00\u5173\u72B6\u6001\u5207\u6362\u56DE\u8C03</td>\n<td>event.detail: \u662F\u5426\u9009\u4E2D\u5F00\u5173</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="wai-bu-yang-shi-lei" tabindex="-1">\u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>node-class</td>\n<td>\u5706\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);