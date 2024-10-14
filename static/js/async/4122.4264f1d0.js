(self.webpackChunk=self.webpackChunk||[]).push([["4122"],{2328:function(s,a,n){"use strict";n.r(a);var l=n("7059");let t=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>\u5B9A\u5236\u4E3B\u9898</h1>\n<div class="van-doc-card"><h3 id="bei-jing-zhi-shi" tabindex="-1">\u80CC\u666F\u77E5\u8BC6</h3>\n<p>\u5C0F\u7A0B\u5E8F\u57FA\u4E8E <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn" target="_blank">Shadow DOM</a> \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u6240\u4EE5 Vant Weapp \u4F7F\u7528\u4E0E\u4E4B\u914D\u5957\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS \u53D8\u91CF</a> \u6765\u5B9E\u73B0\u5B9A\u5236\u4E3B\u9898\u3002\u94FE\u63A5\u4E2D\u7684\u5185\u5BB9\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5BF9\u8FD9\u4E24\u4E2A\u6982\u5FF5\u6709\u57FA\u672C\u7684\u8BA4\u8BC6\uFF0C\u907F\u514D\u8BB8\u591A\u4E0D\u5FC5\u8981\u7684\u56F0\u6270\u3002</p>\n<p>CSS \u53D8\u91CF \u7684\u517C\u5BB9\u6027\u8981\u6C42\u53EF\u4EE5\u5728 <a href="https://caniuse.com/#feat=css-variables" target="_blank">\u8FD9\u91CC</a> \u67E5\u770B\u3002\u5BF9\u4E8E\u4E0D\u652F\u6301 CSS \u53D8\u91CF \u7684\u8BBE\u5907\uFF0C\u5B9A\u5236\u4E3B\u9898\u5C06\u4E0D\u4F1A\u751F\u6548\uFF0C\u4E0D\u8FC7\u4E0D\u5FC5\u62C5\u5FC3\uFF0C\u9ED8\u8BA4\u6837\u5F0F\u4ECD\u4F1A\u751F\u6548\u3002</p>\n</div><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u5B9A\u5236\u4F7F\u7528\u7684 CSS \u53D8\u91CF \u4E0E Less \u53D8\u91CF \u540C\u540D\uFF0C\u4E0B\u9762\u662F\u4E00\u4E9B\u57FA\u672C\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u6240\u6709\u53EF\u7528\u7684\u989C\u8272\u53D8\u91CF\u8BF7\u53C2\u8003 <a href="https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less" target="_blank">\u914D\u7F6E\u6587\u4EF6</a>\u3002</p>\n<pre><code class="language-less"><span class="hljs-comment">// Component Colors</span>\n<span class="hljs-variable">@text-color:</span> <span class="hljs-number">#323233</span>;\n<span class="hljs-variable">@border-color:</span> <span class="hljs-number">#ebedf0</span>;\n<span class="hljs-variable">@active-color:</span> <span class="hljs-number">#f2f3f5</span>;\n<span class="hljs-variable">@background-color:</span> <span class="hljs-number">#f8f8f8</span>;\n<span class="hljs-variable">@background-color-light:</span> <span class="hljs-number">#fafafa</span>;\n</code></pre>\n</div><h2 id="ding-zhi-fang-fa" tabindex="-1">\u5B9A\u5236\u65B9\u6CD5</h2>\n<div class="van-doc-card"><h3 id="ding-zhi-dan-ge-zu-jian-de-zhu-ti-yang-shi" tabindex="-1">\u5B9A\u5236\u5355\u4E2A\u7EC4\u4EF6\u7684\u4E3B\u9898\u6837\u5F0F</h3>\n<blockquote>\n<p>\u5728 wxss \u4E2D\u4E3A\u7EC4\u4EF6\u8BBE\u7F6E CSS \u53D8\u91CF</p>\n</blockquote>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-button&quot;</span>&gt;</span>\n  \u9ED8\u8BA4\u6309\u94AE\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n<pre><code class="language-less"><span class="hljs-selector-class">.my-button</span> {\n  <span class="hljs-attr">--button-border-radius</span>: 10px;\n  <span class="hljs-attr">--button-default-color</span>: #f2f3f5;\n}\n</code></pre>\n<blockquote>\n<p>\u6216\u901A\u8FC7 style \u5C5E\u6027\u6765\u8BBE\u7F6E CSS \u53D8\u91CF\uFF0C\u8FD9\u4F7F\u4F60\u80FD\u591F\u8F7B\u677E\u5B9E\u73B0\u4E3B\u9898\u7684\u52A8\u6001\u5207\u6362</p>\n</blockquote>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;{{ buttonStyle }}&quot;</span>&gt;</span>\n  \u9ED8\u8BA4\u6309\u94AE\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">buttonStyle</span>: <span class="hljs-string">`\n      --button-border-radius: 10px;\n      --button-default-color: green;\n    `</span>,\n  },\n\n  <span class="hljs-title function_">onLoad</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({\n        <span class="hljs-attr">buttonStyle</span>: <span class="hljs-string">`\n          --button-border-radius: 2px;\n          --button-default-color: pink;\n        `</span>,\n      });\n    }, <span class="hljs-number">2000</span>);\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ding-zhi-duo-ge-zu-jian-de-zhu-ti-yang-shi" tabindex="-1">\u5B9A\u5236\u591A\u4E2A\u7EC4\u4EF6\u7684\u4E3B\u9898\u6837\u5F0F</h3>\n<blockquote>\n<p>\u4E0E\u5355\u4E2A\u7EC4\u4EF6\u7684\u5B9A\u5236\u65B9\u5F0F\u7C7B\u4F3C\uFF0C\u53EA\u9700\u7528\u4E00\u4E2A container \u8282\u70B9\u5305\u88F9\u4F4F\u9700\u8981\u5B9A\u5236\u7684\u7EC4\u4EF6\uFF0C\u5E76\u5C06 CSS \u53D8\u91CF \u8BBE\u7F6E\u5728 container \u8282\u70B9\u4E0A</p>\n</blockquote>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">bind:click</span>=<span class="hljs-string">&quot;onClick&quot;</span>&gt;</span>\n    \u9ED8\u8BA4\u6309\u94AE\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-toast</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;van-toast&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Toast</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/weapp/toast/toast&#x27;</span>;\n\n<span class="hljs-title class_">Page</span>({\n  <span class="hljs-title function_">onClick</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#x27;\u6211\u662F\u63D0\u793A\u6587\u6848\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u5341\u4E94\u5B57~&#x27;</span>);\n  },\n});\n</code></pre>\n<pre><code class="language-less"><span class="hljs-selector-class">.container</span> {\n  <span class="hljs-attr">--button-border-radius</span>: 10px;\n  <span class="hljs-attr">--button-default-color</span>: #f2f3f5;\n  <span class="hljs-attr">--toast-max-width</span>: 100px;\n  <span class="hljs-attr">--toast-background-color</span>: pink;\n}\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ding-zhi-quan-ju-zhu-ti-yang-shi" tabindex="-1">\u5B9A\u5236\u5168\u5C40\u4E3B\u9898\u6837\u5F0F</h3>\n<blockquote>\n<p>\u5728 app.wxss \u4E2D\uFF0C\u5199\u5165 CSS \u53D8\u91CF\uFF0C\u5373\u53EF\u5BF9\u5168\u5C40\u751F\u6548</p>\n</blockquote>\n<pre><code class="language-less"><span class="hljs-selector-tag">page</span> {\n  <span class="hljs-attr">--button-border-radius</span>: 10px;\n  <span class="hljs-attr">--button-default-color</span>: #f2f3f5;\n  <span class="hljs-attr">--toast-max-width</span>: 100px;\n  <span class="hljs-attr">--toast-background-color</span>: pink;\n}\n</code></pre>\n</div>'},null,8,t))}}}]);