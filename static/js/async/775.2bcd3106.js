(self.webpackChunk=self.webpackChunk||[]).push([["775"],{7397:function(n,t,s){"use strict";s.r(t);var a=s("7059");let d=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Transition \u52A8\u753B</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u4F7F\u5143\u7D20\u4ECE\u4E00\u79CD\u6837\u5F0F\u9010\u6E10\u53D8\u5316\u4E3A\u53E6\u4E00\u79CD\u6837\u5F0F\u7684\u6548\u679C\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-transition&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/transition/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u5C06\u5143\u7D20\u5305\u88F9\u5728 transition \u7EC4\u4EF6\u5185\uFF0C\u5728\u5143\u7D20\u5C55\u793A/\u9690\u85CF\u65F6\uFF0C\u4F1A\u6709\u76F8\u5E94\u7684\u8FC7\u6E21\u52A8\u753B\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-transition</span> <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span> <span class="hljs-attr">custom-class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">van-transition</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="dong-hua-lei-xing" tabindex="-1">\u52A8\u753B\u7C7B\u578B</h3>\n<p>transition \u7EC4\u4EF6\u5185\u7F6E\u4E86\u591A\u79CD\u52A8\u753B\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>name</code>\u5B57\u6BB5\u6307\u5B9A\u52A8\u753B\u7C7B\u578B\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fade-up&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="gao-ji-yong-fa" tabindex="-1">\u9AD8\u7EA7\u7528\u6CD5</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7\u5916\u90E8\u6837\u5F0F\u7C7B\u81EA\u5B9A\u4E49\u8FC7\u6E21\u6548\u679C\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u5236\u8FDB\u5165\u548C\u79FB\u51FA\u7684\u6301\u7EED\u65F6\u95F4\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-transition</span>\n  <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span>\n  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;&quot;</span>\n  <span class="hljs-attr">duration</span>=<span class="hljs-string">&quot;{{ { enter: 300, leave: 1000 } }}&quot;</span>\n  <span class="hljs-attr">enter-class</span>=<span class="hljs-string">&quot;van-enter-class&quot;</span>\n  <span class="hljs-attr">enter-active-class</span>=<span class="hljs-string">&quot;van-enter-active-class&quot;</span>\n  <span class="hljs-attr">leave-active-class</span>=<span class="hljs-string">&quot;van-leave-active-class&quot;</span>\n  <span class="hljs-attr">leave-to-class</span>=<span class="hljs-string">&quot;van-leave-to-class&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-css"><span class="hljs-selector-class">.van-enter-active-class</span>,\n<span class="hljs-selector-class">.van-leave-active-class</span> {\n  <span class="hljs-attribute">transition-property</span>: background-color, transform;\n}\n\n<span class="hljs-selector-class">.van-enter-class</span>,\n<span class="hljs-selector-class">.van-leave-to-class</span> {\n  <span class="hljs-attribute">background-color</span>: red;\n  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">rotate</span>(-<span class="hljs-number">360deg</span>) <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">100%</span>, -<span class="hljs-number">100%</span>, <span class="hljs-number">0</span>);\n}\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>\u52A8\u753B\u7C7B\u578B</td>\n<td><em>string</em></td>\n<td><code>fade</code></td>\n</tr>\n<tr>\n<td>show</td>\n<td>\u662F\u5426\u5C55\u793A\u7EC4\u4EF6</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td>\n<td><em>number | object</em></td>\n<td><code>300</code></td>\n</tr>\n<tr>\n<td>custom-style</td>\n<td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bind:before-enter</td>\n<td>\u8FDB\u5165\u524D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:enter</td>\n<td>\u8FDB\u5165\u4E2D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:after-enter</td>\n<td>\u8FDB\u5165\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:before-leave</td>\n<td>\u79BB\u5F00\u524D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:leave</td>\n<td>\u79BB\u5F00\u4E2D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:after-leave</td>\n<td>\u79BB\u5F00\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="wai-bu-yang-shi-lei" tabindex="-1">\u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>enter-class</td>\n<td>\u5B9A\u4E49\u8FDB\u5165\u8FC7\u6E21\u7684\u5F00\u59CB\u72B6\u6001\u3002\u5728\u5143\u7D20\u88AB\u63D2\u5165\u4E4B\u524D\u751F\u6548\uFF0C\u5728\u5143\u7D20\u88AB\u63D2\u5165\u4E4B\u540E\u7684\u4E0B\u4E00\u5E27\u79FB\u9664\u3002</td>\n</tr>\n<tr>\n<td>enter-active-class</td>\n<td>\u5B9A\u4E49\u8FDB\u5165\u8FC7\u6E21\u751F\u6548\u65F6\u7684\u72B6\u6001\u3002\u5728\u6574\u4E2A\u8FDB\u5165\u8FC7\u6E21\u7684\u9636\u6BB5\u4E2D\u5E94\u7528\uFF0C\u5728\u5143\u7D20\u88AB\u63D2\u5165\u4E4B\u524D\u751F\u6548\uFF0C\u5728\u8FC7\u6E21/\u52A8\u753B\u5B8C\u6210\u4E4B\u540E\u79FB\u9664\u3002\u8FD9\u4E2A\u7C7B\u53EF\u4EE5\u88AB\u7528\u6765\u5B9A\u4E49\u8FDB\u5165\u8FC7\u6E21\u7684\u8FC7\u7A0B\u65F6\u95F4\uFF0C\u5EF6\u8FDF\u548C\u66F2\u7EBF\u51FD\u6570\u3002</td>\n</tr>\n<tr>\n<td>enter-to-class</td>\n<td>\u5B9A\u4E49\u8FDB\u5165\u8FC7\u6E21\u7684\u7ED3\u675F\u72B6\u6001\u3002\u5728\u5143\u7D20\u88AB\u63D2\u5165\u4E4B\u540E\u4E0B\u4E00\u5E27\u751F\u6548 (\u4E0E\u6B64\u540C\u65F6 enter-class \u88AB\u79FB\u9664)\uFF0C\u5728\u8FC7\u6E21/\u52A8\u753B\u5B8C\u6210\u4E4B\u540E\u79FB\u9664\u3002</td>\n</tr>\n<tr>\n<td>leave-class</td>\n<td>\u5B9A\u4E49\u79BB\u5F00\u8FC7\u6E21\u7684\u5F00\u59CB\u72B6\u6001\u3002\u5728\u79BB\u5F00\u8FC7\u6E21\u88AB\u89E6\u53D1\u65F6\u7ACB\u523B\u751F\u6548\uFF0C\u4E0B\u4E00\u5E27\u88AB\u79FB\u9664\u3002</td>\n</tr>\n<tr>\n<td>leave-active-class</td>\n<td>\u5B9A\u4E49\u79BB\u5F00\u8FC7\u6E21\u751F\u6548\u65F6\u7684\u72B6\u6001\u3002\u5728\u6574\u4E2A\u79BB\u5F00\u8FC7\u6E21\u7684\u9636\u6BB5\u4E2D\u5E94\u7528\uFF0C\u5728\u79BB\u5F00\u8FC7\u6E21\u88AB\u89E6\u53D1\u65F6\u7ACB\u523B\u751F\u6548\uFF0C\u5728\u8FC7\u6E21/\u52A8\u753B\u5B8C\u6210\u4E4B\u540E\u79FB\u9664\u3002\u8FD9\u4E2A\u7C7B\u53EF\u4EE5\u88AB\u7528\u6765\u5B9A\u4E49\u79BB\u5F00\u8FC7\u6E21\u7684\u8FC7\u7A0B\u65F6\u95F4\uFF0C\u5EF6\u8FDF\u548C\u66F2\u7EBF\u51FD\u6570\u3002</td>\n</tr>\n<tr>\n<td>leave-to-class</td>\n<td>\u5B9A\u4E49\u79BB\u5F00\u8FC7\u6E21\u7684\u7ED3\u675F\u72B6\u6001\u3002\u5728\u79BB\u5F00\u8FC7\u6E21\u88AB\u89E6\u53D1\u4E4B\u540E\u4E0B\u4E00\u5E27\u751F\u6548 (\u4E0E\u6B64\u540C\u65F6 leave-class \u88AB\u5220\u9664)\uFF0C\u5728\u8FC7\u6E21/\u52A8\u753B\u5B8C\u6210\u4E4B\u540E\u79FB\u9664\u3002</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dong-hua-lei-xing-1" tabindex="-1">\u52A8\u753B\u7C7B\u578B</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fade</td>\n<td>\u6DE1\u5165</td>\n</tr>\n<tr>\n<td>fade-up</td>\n<td>\u4E0A\u6ED1\u6DE1\u5165</td>\n</tr>\n<tr>\n<td>fade-down</td>\n<td>\u4E0B\u6ED1\u6DE1\u5165</td>\n</tr>\n<tr>\n<td>fade-left</td>\n<td>\u5DE6\u6ED1\u6DE1\u5165</td>\n</tr>\n<tr>\n<td>fade-right</td>\n<td>\u53F3\u6ED1\u6DE1\u5165</td>\n</tr>\n<tr>\n<td>slide-up</td>\n<td>\u4E0A\u6ED1\u8FDB\u5165</td>\n</tr>\n<tr>\n<td>slide-down</td>\n<td>\u4E0B\u6ED1\u8FDB\u5165</td>\n</tr>\n<tr>\n<td>slide-left</td>\n<td>\u5DE6\u6ED1\u8FDB\u5165</td>\n</tr>\n<tr>\n<td>slide-right</td>\n<td>\u53F3\u6ED1\u8FDB\u5165</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);