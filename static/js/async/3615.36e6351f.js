(self.webpackChunk=self.webpackChunk||[]).push([["3615"],{6846:function(s,a,n){"use strict";n.r(a);var t=n("7059");let l=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Collapse \u6298\u53E0\u9762\u677F</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5C06\u4E00\u7EC4\u5185\u5BB9\u653E\u7F6E\u5728\u591A\u4E2A\u6298\u53E0\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u9762\u677F\u7684\u6807\u9898\u53EF\u4EE5\u5C55\u5F00\u6216\u6536\u7F29\u5176\u5185\u5BB9\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-collapse&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/collapse/index&quot;</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;van-collapse-item&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/collapse-item/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u901A\u8FC7<code>value</code>\u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C<code>activeNames</code>\u4E3A\u6570\u7EC4\u683C\u5F0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ activeNames }}&quot;</span> <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">activeNames</span>: [<span class="hljs-string">&#x27;1&#x27;</span>],\n  },\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({\n      <span class="hljs-attr">activeNames</span>: event.<span class="hljs-property">detail</span>,\n    });\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shou-feng-qin" tabindex="-1">\u624B\u98CE\u7434</h3>\n<p>\u901A\u8FC7<code>accordion</code>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6700\u591A\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\uFF0C\u6B64\u65F6<code>activeName</code>\u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">accordion</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ activeName }}&quot;</span> <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">activeName</span>: <span class="hljs-string">&#x27;1&#x27;</span>,\n  },\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({\n      <span class="hljs-attr">activeName</span>: event.<span class="hljs-property">detail</span>,\n    });\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shi-jian-jian-ting" tabindex="-1">\u4E8B\u4EF6\u76D1\u542C</h3>\n<p><code>van-collapse</code> \u63D0\u4F9B\u4E86 <code>change</code>, <code>open</code> \u548C <code>close</code> \u4E8B\u4EF6\u3002<code>change</code> \u4E8B\u4EF6\u5728\u9762\u677F\u5207\u6362\u65F6\u89E6\u53D1\uFF0C<code>open</code> \u4E8B\u4EF6\u5728\u9762\u677F\u5C55\u5F00\u65F6\u89E6\u53D1\uFF0C<code>close</code> \u4E8B\u4EF6\u5728\u9762\u677F\u5173\u95ED\u65F6\u89E6\u53D1\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ activeNames }}&quot;</span>\n  <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n  <span class="hljs-attr">bind:open</span>=<span class="hljs-string">&quot;onOpen&quot;</span>\n  <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">activeNames</span>: [<span class="hljs-string">&#x27;1&#x27;</span>],\n  },\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({\n      <span class="hljs-attr">activeNames</span>: event.<span class="hljs-property">detail</span>,\n    });\n  },\n  <span class="hljs-title function_">onOpen</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-title class_">Toast</span>(<span class="hljs-string">`\u5C55\u5F00: <span class="hljs-subst">${event.detail}</span>`</span>);\n  },\n  <span class="hljs-title function_">onClose</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-title class_">Toast</span>(<span class="hljs-string">`\u5173\u95ED: <span class="hljs-subst">${event.detail}</span>`</span>);\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-biao-ti-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ activeNames }}&quot;</span> <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>\u6807\u98981<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;question-o&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>\n    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">activeNames</span>: [<span class="hljs-string">&#x27;1&#x27;</span>],\n  },\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({\n      <span class="hljs-attr">activeNames</span>: event.<span class="hljs-property">detail</span>,\n    });\n  },\n});\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="collapse-props" tabindex="-1">Collapse Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td>\n<td>\u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>(string | number)[]</em><br>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>string | number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>accordion</td>\n<td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="collapse-event" tabindex="-1">Collapse Event</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>activeNames: <em>string | Array</em></td>\n</tr>\n<tr>\n<td>open</td>\n<td>\u5C55\u5F00\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>currentName: <em>string | number</em></td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u9762\u677F\u65F6\u89E6\u53D1</td>\n<td>currentName: <em>string | number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7D22\u5F15\u503C</td>\n<td><em>string | number</em></td>\n<td><code>index</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u6807\u9898\u680F\u5DE6\u4FA7\u5185\u5BB9</td>\n<td><em>string | number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u6807\u9898\u680F\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A<code>large</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u6807\u9898\u680F\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u53EF\u9009\u503C\u89C1 <a href="#/icon" target="_blank">Icon \u7EC4\u4EF6</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u6807\u9898\u680F\u53F3\u4FA7\u5185\u5BB9</td>\n<td><em>string | number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u6807\u9898\u680F\u63CF\u8FF0\u4FE1\u606F</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>\u662F\u5426\u5C55\u793A\u6807\u9898\u680F\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u9762\u677F</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="collapseitem-slot" tabindex="-1">CollapseItem Slot</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>\u9762\u677F\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u81EA\u5B9A\u4E49<code>icon</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49<code>title</code></td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE\uFF0C\u9ED8\u8BA4\u662F<code>arrow</code>, \u9700\u8981\u5C06 <code>is-link</code> \u8BBE\u7F6E\u4E3A <code>false</code>, \u624D\u4F1A\u751F\u6548</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="collapse-wai-bu-yang-shi-lei" tabindex="-1">Collapse \u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="collapseitem-wai-bu-yang-shi-lei" tabindex="-1">CollapseItem \u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>content-class</td>\n<td>\u5185\u5BB9\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);