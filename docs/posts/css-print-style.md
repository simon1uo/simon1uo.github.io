---
title: ✍️ 运用 CSS 的打印样式进行排版设计
description: 运用 CSS 的打印样式进行排版设计
date: 2021-11-21
tags:
  - traslate
---



# ✍️ 运用 CSS 的打印样式进行排版设计

> 这篇 post 原本是我在 [掘金](https://juejin.cn/post/7033358523547254820) 上已经发布过的一篇参与掘金翻译计划的文章，翻译花了不少时间，为了搬运来自己的博客，目前按照中文排版规范以及用词上重新修改了一下，并且其中涉及到 CSS 关于打印的样式的一些不常见的知识，还是值得一读的。
>
> 原文地址：[Designing For Print With CSS](https://link.juejin.cn/?target=https%3A%2F%2Fwww.smashingmagazine.com%2F2015%2F01%2Fdesigning-for-print-with-css%2F)
> 原文作者：Rachel Andrew



在这篇文章，我们会探讨那些原本不在网络浏览器上使用，而是使用在印刷、分页媒体领域的 CSS 模块。我将解释其中所引入的选择器、属性以及值是如何工作的。在最后我会给出一个用于实际工作的例子，你可以将其作为练手的工具。在这个实例中，对于这个特殊的 CSS 样式，会用到代理服务的文件。我将会使用「Prince」，这是一个商业产品但有免费的版本，可以用于非商业用途，这是练手的好工具。 

## 为什么要用 HTML 和 CSS 来设计打印文件的样式

这个问题是有点奇怪，就算是一些不是发布在网页上的内容，也要同样使用 HTML 和 CSS 排版吗？依照主流的电子书格式，例如 `epub` 和 `mobi` 格式，都是基于 HTML 和 CSS 之上的。而一些手稿和目录内容大概率不会发布到某个网站。但是使用 HTML 作为标准化排版的工具，比起使用传统的桌面文档编辑工具，例如 Word 文档中，要更加方便和容易进行处理。

## CSS 网页样式与 CSS 打印样式的区别

最大的区别和概念上的转变，就是打印的文件意味着使用一个固定尺寸的页面尺寸。在网页上我们通常不限制视口 `viewport` 的大小，但是对于用于印刷的文件，对每一页文件固定尺寸是至关重要的一步。基于页面固定的大小，我们必须将我们的文档看成是一些页面的集合——分页媒体，而不是一个页面连续的网页文档。

分页媒体引入了对于网页无意义的概念。例如，在分页媒体中会生成页码、在页边生成章节标题、将内容适当分割以使内容不脱离描述标题等。你可能需要为你的内容创建交叉引用和脚注、索引和目录表。你可以在一个桌面排版工具逐步手动处理这些内容，但下一次要更新内容时这些工作又要重复一遍。这就是 CSS 的用武之地，它的规范就是为创建分页媒体而设计的。

正是因为这些用于分页媒体的规范，在这篇文章我们不会考虑浏览器的兼容性，因为这样做意义不大。稍后，我们将了解到一个代理服务运用这些规范，将基于 HTML 和 CSS 编写的文档转换为PDF。

## 规范

以下的 CSS 样式特性对于打印排版都非常有用，有 [「分页媒体模块」](https://www.w3.org/TR/css-page-3/)、[「分页媒体CSS生成内容」](https://www.w3.org/TR/css-gcpm-3/) 规范。下面让我们看看它们的工作原理：

### `@page` 规则

`@page` 规则允许你规范页面框架的每一个方面。例如，你要指定页面的尺寸大小。下面这个例子使用了这个规则，将页面指定了 5.5 x 8.5 的默认页面尺寸。如果你想要按需求打印某本书，找到你可以使用的尺寸至关重要。

```css
@page {
  size: 5.5in 8.5in;
}
```

除了使用特定的值指定大小，你也可以使用某些纸张尺寸的关键字，例如`A4`、`legal`。

```css
@page {
  size: A4;
}
```

你亦可以使用页面方向的关键字来指定页面的方向——`portrait`（纵向）、`landscpae`（横向）。

```css
@page {
  size: A4 landscape;
}
```

### 理解页面模型

在深入更多内容之前，我们需要了解分页媒体中的页面模型的原理，因为它与屏幕上的工作方式有些不同。

页面模型定义了一个页面区域，有 16 个 [页边距盒子模型](https://www.w3.org/TR/css3-page/#margin-boxes)。你可以控制页面区域的大小以及页面区域边缘和页面本身末端之间的边距大小。下面的规范表格很好地解释了这些方框的大小。

![16个页边距盒子模型](https://s2.loli.net/2022/10/10/ReMhSfkY6KypuPv.jpg)

页面区域是你的内容流在页面上的空间，当这些空间用完时，会创建下一个页面。这些外边距的盒子只能用于 CSS 生成内容。

### 「左侧」页与「右侧」页

页面模型的另一个用处，它为「左侧页」和「右侧页」定义了伪类选择器。如果你能仔细翻看一下你手头上的任何一本印刷书，你可能会发现左侧页和右侧页的页边距的大小和内容是不相同的。

我们可以使用这些选择器来定义我们页面的页边距大小。

```css
@page :left {
  margin-left: 3cm;
}

@page :right {
  margin-left: 4cm;
}
```

还有另外两种伪类选择器。`:first`选择器会定位到文档的第一页。


```css
@page :first {

}
```

`:blank` 伪类选择器会定位到一些「留白」的页面。如要添加下面一段文字，可以使用 `@top-center` 页边距盒子定位到页面的顶部居中的位置。

```css
@page :blank {
  @top-center { content: "本页留有空白。" }
}
```

### 分页媒体与内容生成

在上面一个代码例子中，我们使用了 CSS 内容生成将文字添加到页面的顶部居中页边距盒子。正如你所发现的，内容生成在创作我们的以本书中非常重要。这是我们将内容添加到页面边距盒子中的唯一方法。例如，我们想把标题添加到右侧页面左下方的页面边距盒子，我们可以利用 CSS 内容生成。

```css
@page:right{ 
  @bottom-left {
    margin: 10pt 0 30pt 0;
    border-top: .25pt solid #666;
    content: "我的图书";
    font-size: 9pt;
    color: #333;
  }
}
```

### 分页符

关于如何控制分页符的内容同样是「分页媒体」规范中的一部分，正如前面所述，只要内容填充满了一个页面空间，它们会移动到一个新的页面。当你想在页面写上标题，而这个标题在这个页面快要结束的部分，与这个标题相关的内容移动到了下一页，在印刷一本书时，这是你需要极力避免的情况。还有一种情况是，你要避免表格或者图片与它们的描述文字被中断。

在书本的新章节开始时，通常使用 `h1` 作为标题的样式。要让标题总是在某一页的开头，可以设置 `page-break-before` 属性为 `always`。


```css
h1 {
  page-break-before: always;
}
```

要避免标题之后出现分页符，可以使用 `page-break-after` 属性并设置值为 `avoid`。

```css
h1, h2, h3, h4, h5 {
  page-break-after: avoid;
}
```

要避免表格和图片等元素内被分页符中断，可以使用 `page-break-inside` 属性并设置值为 `avoid`。

```css
table, figure {
  page-break-inside: avoid;
}
```

### 计数器

图书有许多东西要用到计数——页码、章节数等。我们可以用CSS来添加这些数字，帮助我们不必因为在中途添加某个新的数字而要对其他内容重新进行重新编号。[CSS计数器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters())帮助我们实现这一功能。

首先，页码是最明显要用到的。CSS提供了一个预定义的页面计数器，它从1开始，每创建一个新的页面都会递增。在你的样式表中，你将使用这个计数器作为生成内容的值，把页面计数器放在你的一个空白框中。在下面的例子中，在右侧页面的右下方和左侧页面的左下方添加页码。

```css
@page:right{
  @bottom-right {
    content: counter(page);
  }
}

@page:left{
  @bottom-left {
    content: counter(page);
  }
}
```

我们也可创建一个名为 `pages` 的计数器，这个计数器将会是文档的总页码数。可以用在显示如「Page 3 of 120」（总 120 页-第 3 页）：

```css
@page:left{
  @bottom-left {
    content: "Page " counter(page) " of " counter(pages);
  }
}
```

如有必要，亦可创建你自定义命名的计数器，根据所需重置递增量。要创建计时器，使用 `counter-reset` 属性重置计数器的值，使用 `counter-increment` 给计数器的值增加给定值。以下的例子在 CSS 中为章节创建了一个名为 `chapternum` 的计数器，并在每一个样式为 `h1` 的标题（即每一个章节的开头）使用时会递增。然后在内容生成中使用该计时器的值，则每一章节的实际标题前会自动添加章节的编号和 `.` 符号。

```css
body {
  counter-reset: chapternum;
}

h1.chapter:before {
  counter-increment: chapternum;
  content: counter(chapternum) ". ";
}
```

我们可以使用同样的方法应用到书中的一些描述图表。一个常用的方法是用 `chapternum.figurenum` 将图表编码。例如，「图 3-2」（Figure 3-2）表示是第三章中的第二个图标。在样式为 `h1` 的标题处，我们将重置 `figurenum`，以使在每一章计数器会从头计数。 

```css
body {
  counter-reset: chapternum figurenum;
}

h1 {
  counter-reset: figurenum;
}

h1.title:before {
  counter-increment: chapternum;
  content: counter(chapternum) ". ";
}

figcaption:before {
  counter-increment: figurenum;
  content: counter(chapternum) "-" counter(figurenum) ". ";
}
```

### 预设字符串

再去看看纸质书。当你翻阅书中的某一章时，你可能会看到该章的标题会印在左上或者右上。而 CSS 中的「分页媒体的内容生成」规范允许我们实现这一需求。

我们会在选择器中使用一个名为 `string-set` 的属性，设置我们想要获取的内容。要想设置为章节的标题，该选择器是 `h1`。 `string-set` 的属性值是你想要设置的标题（`doctitle`为示例）加上 `content()` 。你可以在要想要用到该内容的地方使用 `string()` 即可。

```css
h1 { 
  string-set: doctitle content(); 
}

@page :right {
  @top-right {
    content: string(doctitle);
    margin: 30pt 0 10pt 0;
    font-size: 8pt;
  }
}
```

当你的分页媒体生成时，每当有一个 `h1` 标签，该内容将会写入到相应的 `doctitle`，然后会在右侧页的右上部分输出，并且只会随着另一个 `h1` 编写时才改变。

### Footnotes 脚注

脚注也是 CSS [分页媒体内容生成规范](https://www.w3.org/TR/css-gcpm-3/#footnotes) 中的一部分。脚注的工作方式是，在脚注的文本添加到脚注内联，使用 HTML（可以是 span）标签包裹，并且定义为 `fn` 的类表明它是用于脚注的标签。当渲染成页面时，「脚注元素」的内容会被自动转为一个预定义样式的脚注。

在你的 CSS 样式表中，为你的脚注类选择器创建一个 `float` 属性设置值为 `footnote` 的规则。

```css
.fn {
  float: footnote;
}
```

在你的 HTML 文档中，使用该类选择器包裹所有的脚注文字。

```html
<p>Footnotes<span class="footnotes">Footnotes and notes placed in the footer of a document to reference the text. The footnote will be removed from the flow when the page is created.</span> are useful in books and printed documents.</p>
```

脚注有一个预定义的计数器，原理与上面提到的页数计数器相同。通常情况下，你会想要在每次出现的 `fn` 类时将计数器计数增加一，并且在每一章开始时重置计数器。

```css
.fn {
  counter-increment: footnote;
}

h1 {
  counter-reset: footnote;
}
```

脚注的各个部分可以用CSS伪元素来定位。`footnote-call` 时文本中的数字锚，表示这是一个脚注内容，将使用脚注计数器的计数值为生成内容。

```css
.fn::footnote-call {
  content: counter(footnote);
  font-size: 9pt;
  vertical-align: super;
  line-height: none;
}
```

`footnote-marker` 是放置在文档脚注文本前面的数字标记，这些标记计数的原理与CSS中为有序列表中生成的数字类似。

```css
.fn::footnote-marker {
  font-weight: bold;
}
```

脚注本身被放置在页边，在页面的一个特殊区域内，名为 `@footnote` 。你可以将该区域作为目标和样式，如下所示。

```css
@page {
  @footnote {
    border-top: 1pt solid black;
  }
}
```

### 交叉参考资料

在将我们所学到的一切的运用成实例之前，让我们先看看交叉引用。在网页内容上，我们通过添加链接来交叉参考资料。在一本书或其他印刷文件中，你通常会列出该参考文献的页码。因为页码可能会根据书籍的印刷格式和不同的版本而改变，所以用CSS来做可以省去我们去改变所有的页码的麻烦。

我们使用另一个新的属性 `target-counter`，来添加这些数字文本。首先在你的文档中创建链接，给它们一个 `href`，这是文档中该元素的目标内容的标识。同时，添加一个类选择器来标识它们是交叉参考，而不是外部链接；可以使用 `xref` 属性。

```html
<a class="xref" href="#ch1" title="Chapter 1">Chapter 1</a>
```

然后，在链接之后，再次使用生成内容来输出 `（第 x 页）`，其中 `x` 是书中可以找到该内容的位置的编号ID（与上面设置的 `href` 对应）。

```css
a.xref:after {
  content: " (page " target-counter(attr(href, url), page) ")";
}
```

在实践为一个文档创建目录时，会在同样用到类似的操作。

## 整合全篇：写一本书

此前我们分别了解了许多不同的技术内容，但运用到实际中会让你了解地更加深入。

要真正使用 打印样式CSS 写书，你需要一个支持它的用户代理服务。目前，很少有能很好地实现这一规范的服务。最易入手的是 [Prince](https://princexml.com/)。Prince 的独立商业许可价格不菲，然而，你可以在非商业项目中免费使用Prince。这意味着，你如果想尝试 Prince ，。此外，如果你确实对这项技术有非商业用途，你可以使用Prince来格式化这些书籍。

我从古腾堡计划上我最喜欢的一本书中摘录了一些段落，[哈里森-威尔的《我们的猫》](https://www.gutenberg.org/ebooks/35450)。我选择这本书是因为我喜欢猫，而且它有图片和脚注，我可以用来演示格式化。

你可以在[GitHub](https://github.com/rachelandrew/css-for-print)上找到我使用的文件，以及生成的PDF。如果你想尝试使用CSS并自己制作这本书，那么你需要下载并安装 [Prince](https://princexml.com/)。Prince是Mac上的一个命令行工具，虽然有 Windows 版本的图形化界面，但我还是喜欢命令行，因为它确实非常简单。

使用终端窗口，切换到你的书的目录或你从GitHub下载我的文件的位置。

```bash
cd /Users/username/smashing-css-books
```

现在，运行 Prince。

```bash
prince -s pdf-styles.css book.html builds/book.pdf
```

这将在`builds`文件夹中创建一个名为`book.pdf`的PDF文件。现在，如果你对CSS或HTML做了任何修改，你可以运行Prince来看看有什么不同。

### HTML 文档

我的整本 「书」是在一个单一的 HTML 文档中编译的。用 Prince 编译文档是可行的，但我发现只处理一个大文档更简单。在以 `h1` 开头的章节之前，我有一个包含封面图片的 `div`，然后是本书的目录。

目录链接到各章的`h1`标题的ID。

```html
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
  <head>
  <meta charset="utf-8" />
  <title>Our Cats and All About Them</title>
  <meta name="author" content="Harrison Weir"/>
  <meta name="subject" content="Cats. Their Varieties, Habits and Management; and for show, the Standard of Excellence and Beauty"/>
  <meta name="keywords" content="cats,feline"/>
  <meta name="date" content="2014-12-05"/>
  </head>
  <body>
    <div class="frontcover">
    </div>
    <div class="contents">
      <h1>Extracts from Our Cats and All About Them by Harrison Weir</h1>

        <ul class="toc">
          <li><a href="#ch1">The First Cat Show</a></li>
          <li><a href="#ch2">Trained Cats</a></li>
          <li><a href="#ch3">General Management</a></li>
          <li><a href="#ch4">Superstition and Witchcraft</a></li>
        </ul>

    </div>

    <h1 id="ch1" class="chapter">The First Cat Show</h1>
      <p>… </p>

    <h1 id="ch2" class="chapter">Trained Cats</h1>
      <p>… </p>

    <h1 id="ch3" class="chapter">General Management</h1>
      <p>… </p>

    <h1 id="ch4" class="chapter">Superstition and Witchcraft</h1>
      <p>… </p>

  </body>
</html>
```

然后，CSS 使用了我们到目前为止所描述的所有东西。首先，我们需要使用 `@page` 规则为这本书设置一个尺寸。然后我们使用 `:first` 伪类选择器来删除第1页的边距，因为这一页将有封面图片。

```css
@page {
  size: 5.5in 8.5in;  
  margin: 70pt 60pt 70pt;
}

@page:first {
  size: 5.5in 8.5in;  
  margin: 0;
}
```

然后我们处理封面的图像，确保它覆盖整个页面区域。

```css
div.frontcover { 
  page: cover; 
  content: url("images/cover.png");
  width: 100%;
  height: 100%; 
}
```

![print css sample](https://s2.loli.net/2022/10/10/V8a1LCegRZl3HAQ.jpg)

接下来，我们使用 `:right` 和 `:left` 伪类选择器来处理左右两页的具体细节。

右侧页的左下角是书的标题，右下角是页码计数器，右上角是章节的标题。章节的标题是用样式表中的 `string-set` 进一步设置的。

```css
@page:right{ 
  @bottom-left {
    margin: 10pt 0 30pt 0;
    border-top: .25pt solid #666;
    content: "Our Cats";
    font-size: 9pt;
    color: #333;
  }

  @bottom-right { 
    margin: 10pt 0 30pt 0;
    border-top: .25pt solid #666;
    content: counter(page);
    font-size: 9pt;
  }

  @top-right {
    content:  string(doctitle);
    margin: 30pt 0 10pt 0;
    font-size: 9pt;
    color: #333;
  }
}
```

![3-image-spread-right-opt](https://s2.loli.net/2022/10/10/ASz1wVnM6qjh9aP.jpg)

左边的版面在右下方有书名，左下方有计页器。

```css
@page:left {
  @bottom-right {
    margin: 10pt 0 30pt 0;
    border-top: .25pt solid #666;
    content: "Our Cats";
    font-size: 9pt;
    color: #333;
  }

  @bottom-left { 
    margin: 10pt 0 30pt 0;
    border-top: .25pt solid #666;
    content: counter(page);
    font-size: 9pt;
  }
}
```

![4-image-spread-left-opt](https://s2.loli.net/2022/10/10/ItBXGlxEyoPdY8e.jpg)

对于包含封面图片的第一页，我们将确保没有生成的内容出现，将其设置为 `normal` 。

```css
@page:first {
  @bottom-right {
    content: normal;
    margin: 0;
  }

  @bottom-left {
    content: normal;
    margin: 0;
  }
}
```

样式表的下一部分是关于计数器的。除了预设的页面计数器外，我们还为章节和数字定义了计数器。

```css
/* Reset chapter and figure counters on the body */
body {
  counter-reset: chapternum figurenum;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
  line-height: 1.5;
  font-size: 11pt;
}

/* Get the title of the current chapter, which will be the content of the h1.
Reset figure counter because figures start from 1 in each chapter. */
h1 {
  string-set: doctitle content();
  page-break-before: always;
  counter-reset: figurenum;
  counter-reset: footnote;
  line-height: 1.3;
}

/* Increment chapter counter */
h1.chapter:before {
  counter-increment: chapternum;
  content: counter(chapternum) ". ";
}

/* Increment and display figure counter */
figcaption:before {
  counter-increment: figurenum;
  content: counter(chapternum) "-" counter(figurenum) ". ";
}
```

现在，各章的编号都放在标题之前。数字也显示其编号。

![5-image-figure-number-opt](https://s2.loli.net/2022/10/10/otjz5bmpIZDCRSL.jpg)

我们像前面的解释一样创建脚注，对脚注的调用进行上标。

```css
.fn {
  float: footnote;
}

.fn {
  counter-increment: footnote;
}

.fn::footnote-call {
  content: counter(footnote);
  font-size: 9pt;
  vertical-align: super;
  line-height: none;
}

.fn::footnote-marker {
  font-weight: bold;
}

@page {
  @footnote {
    border-top: 0.6pt solid black;
    padding-top: 8pt;
  }
}
```

![6-image-footnotes-opt](https://s2.loli.net/2022/10/10/duzWYAifl9VMvRF.jpg)

然后我们添加一些规则来控制页面的中断。你需要相当小心，不要在这方面过于强硬。如果你的书有很多表格和数字，那么在这里添加许多特定的规则可能会导致书中出现很多长长的空隙。实验和测试将显示出你能在多大程度上控制断句。我发现下面的规则是一个好的起点。

请记住，这是对用户代理的一个建议。在某些情况下，如果表格不适合放在页面上，保持表格不被破坏将是不可能的。

```css
h1, h2, h3, h4, h5 {
  font-weight: bold;
  page-break-after: avoid;
  page-break-inside:avoid;
}

h1+p, h2+p, h3+p {
  page-break-before: avoid;
}

table, figure {
  page-break-inside: avoid;
}
```

最后，我们对目录进行样式设计，在这里我们使用一个有趣的技巧。在描述交叉引用时，我解释了我们如何使用`target-counter`来显示ID所在的页码。这就是我们要为我们的目录所做的。下面的规则把页码放在目录中每一章的链接后面。

```css
ul.toc a::after {
  content: target-counter(attr(href), page);
}
```

![7-image-toc-numbers-opt](https://s2.loli.net/2022/10/10/ALPEfqon3T17t5x.jpg)

然而，在书籍中，你通常会使用领导点来将所有的页码排在右边的空白处。令人惊奇的是，CSS给了我们一个方法，通过在生成的内容中的数字前添加`leader()`，就可以做到这一点。

```css
ul.toc a::after {
  content: leader('.') target-counter(attr(href), page);
}
```

![8-image-toc-leader-opt](https://s2.loli.net/2022/10/10/7s8jRYivAmFIrdQ.jpg)

我们现在有一个完整的样式表，可以用来制作我们的书。我在这里避免在排版上花很多时间，而是集中在创建一本书的具体细节上。然而，从这一点出发，你可以进行试验，添加你自己的风格，以创建一个独特的书籍设计。



## 不要局限于书本

请记住，这些技术不只是用于书籍。你可以用它们来直接从你为客户开发的网站的HTML中生成产品目录的打印和PDF版本。或者你可以从网络内容中创建传单和小册子。

如果你想用 Prince 从网站上创建PDF文档，那么 [DocRaptor](https://docraptor.com/) 是一个不错的选择。这项服务通过一个 API 使用 Prince。你可以通过 API 发送文件并接收 PDF ——完美支持用户以 PDF 形式随时下载内容。我们在这篇文章中所看到的一切都可以通过与 DocRaptor 的 API 集成来实现。

即使你没有立即生成 PDF 的需求，这也是 CSS 的一个迷人的方面。收藏这篇文章吧，说不定哪一天你就有用到它的地方。
