---
layout: default
---

## Iconfont

依靠 MUX 研发的 [Iconfont 平台](http://ux.etao.com/fonts)，我们提供丰富的图标字体供
诸位使用。只需要引入 Cube 样式：

{% include cubeUsage.html %}

然后按照图标对照表，在 HTML 中写入需要的图标编码即可：

```html
<i class="iconfont">&#444;</i>
```

将输出：<i class="iconfont">&#444;</i>

## 再进一步

除了基础用法之外，如果你对资源请求要求比较高，不想要字体文件太大，也可以通过 Iconfont 平台
选取需要的图标，打包下载字体，并放到相应的 CDN。

在新版本的 IE 中要求，样式与字体要放在同一域名下，不然会请求错误。

同时，如果你不需要支持低版本的 IE，换言之，你所需要支持的浏览器，都支持 CSS `:before`
伪元素选择器，那么，我们可以使用语义化的图标使用方式：

```html
<i class="iconfont iconfont-cube"></i>
```

（未完成）[#4](https://github.com/thx/cube/issues/4)
