(self.webpackChunk=self.webpackChunk||[]).push([["8960"],{648:function(s,n,a){"use strict";a.r(n);var t=a("7059");let d=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Circle \u73AF\u5F62\u8FDB\u5EA6\u6761</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5706\u73AF\u5F62\u7684\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDB\u5EA6\u6E10\u53D8\u52A8\u753B\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-circle&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/circle/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p><code>value</code>\u5C5E\u6027\u8868\u793A\u8FDB\u5EA6\u6761\u7684\u76EE\u6807\u8FDB\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ 30 }}&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="kuan-du-ding-zhi" tabindex="-1">\u5BBD\u5EA6\u5B9A\u5236</h3>\n<p>\u901A\u8FC7<code>stroke-width</code>\u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5BBD\u5EA6\u5B9A\u5236&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yan-se-ding-zhi" tabindex="-1">\u989C\u8272\u5B9A\u5236</h3>\n<p>\u901A\u8FC7<code>color</code>\u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C<code>layer-color</code>\u5C5E\u6027\u6765\u63A7\u5236\u8F68\u9053\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span>\n  <span class="hljs-attr">layer-color</span>=<span class="hljs-string">&quot;#eeeeee&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u989C\u8272\u5B9A\u5236&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jian-bian-se" tabindex="-1">\u6E10\u53D8\u8272</h3>\n<p><code>color</code>\u5C5E\u6027\u652F\u6301\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u5B9A\u4E49\u6E10\u53D8\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;{{ gradientColor }}&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6E10\u53D8\u8272&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">value</span>: <span class="hljs-number">25</span>,\n    <span class="hljs-attr">gradientColor</span>: {\n      <span class="hljs-string">&#x27;0%&#x27;</span>: <span class="hljs-string">&#x27;#ffd01e&#x27;</span>,\n      <span class="hljs-string">&#x27;100%&#x27;</span>: <span class="hljs-string">&#x27;#ee0a24&#x27;</span>,\n    },\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ni-shi-zhen-fang-xiang" tabindex="-1">\u9006\u65F6\u9488\u65B9\u5411</h3>\n<p>\u5C06<code>clockwise</code>\u8BBE\u7F6E\u4E3A<code>false</code>\uFF0C\u8FDB\u5EA6\u4F1A\u4ECE\u9006\u65F6\u9488\u65B9\u5411\u5F00\u59CB\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#07c160&quot;</span>\n  <span class="hljs-attr">clockwise</span>=<span class="hljs-string">&quot;{{ false }}&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9006\u65F6\u9488&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="da-xiao-ding-zhi" tabindex="-1">\u5927\u5C0F\u5B9A\u5236</h3>\n<p>\u901A\u8FC7<code>size</code>\u5C5E\u6027\u8BBE\u7F6E\u5706\u73AF\u76F4\u5F84\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;120&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5927\u5C0F\u5B9A\u5236&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u76EE\u6807\u8FDB\u5EA6</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>\u6307\u5B9A canvas \u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>2d</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5706\u73AF\u76F4\u5F84\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u53EF\u4EE5\u5B9A\u4E49\u6E10\u53D8\u8272</td>\n<td><em>string | object</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>layer-color</td>\n<td>\u8F68\u9053\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#fff</code></td>\n</tr>\n<tr>\n<td>fill</td>\n<td>\u586B\u5145\u989C\u8272</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>speed</td>\n<td>\u52A8\u753B\u901F\u5EA6\uFF08\u5355\u4F4D\u4E3A value/s\uFF09</td>\n<td><em>number</em></td>\n<td><code>50</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>stroke-width</td>\n<td>\u8FDB\u5EA6\u6761\u5BBD\u5EA6</td>\n<td><em>number</em></td>\n<td><code>4</code></td>\n</tr>\n<tr>\n<td>clockwise</td>\n<td>\u662F\u5426\u987A\u65F6\u9488\u589E\u52A0</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>\u81EA\u5B9A\u4E49\u6587\u5B57\u5185\u5BB9\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86<code>fill</code>\uFF0C\u63D2\u69FD\u5185\u5BB9\u4F1A\u88AB\u539F\u751F\u7EC4\u4EF6\u8986\u76D6</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);