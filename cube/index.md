---
layout: default
---

## 模块

- neat.css
- type.css
- iconfont.css
- utils.css

## neat.css

样式重置。

## type.css 为中文排版而生

国外现有的 <abbr title="Cascading Style Sheets">CSS</abbr> 解决方案（例如：
Bootstrap，Normalize，CSS Reset 等）都不会考虑针对中文排版做优化，type.css 就是为了
解决这个问题而生，以 neat.css 为基础，让普通使用者无需考虑排版细节，快速应用到博客、文章等
大面积中文排版的地方。

### 中文排版的难点：

1. 网页中可用简体中文字体较少，字体字号的选择尤为重要
2. 不同浏览器及操作系统的渲染差异
3. 特定 HTML 标签在中文排版中的用法，例如<u>专名号</u>`[&lt;u&gt;](#u)`

### Type.css 的优化

1. 默认字号设为14px，更加便于阅读
2. 字体根据不同的操作系统和浏览器做最佳适配：
   * Windows Vista 及其以上版本使用「微软雅黑」
   * OS X 10.6 及其以上版本使用「冬青黑体简体中文（Hiragino Sans GB）」
   * OS X 10.6 以下及 iOS 使用系统默认的「华文黑体」
   * Linux 使用「文泉驿微米黑（Wenquanyi Micro Hei）」
3. 针对特定的 HTML 标签做优化，见示例

## Iconfont.css

字体样式。

## Utils.css

工具样式。
=======
## 缘起

Cube <i class="iconfont">&#444;</i> 取自电影
《[Cube](http://movie.douban.com/subject/1305903/)》。电影里的 Cube
是个构造错综复杂的立方体，我们取这个名字，则是希望此项目能回归立方体的本意，和电影的愿景，
即项目应简单，一横一竖，自成一体。

## 功能

{% include cubeModules.html %}

## 榜样

- [Kraken](http://cferdinandi.github.io/kraken/index.html)
- [Kube](http://imperavi.com/kube/)
- [Bootstrap](http://getbootstrap.com/)
