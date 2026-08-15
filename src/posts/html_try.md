---
title: html尝试
date: 2026-08-13
tags: [代码, html, 前端]
---


为了能够加入某个部门而做，主要是他们后端走java和我c++不同啊，可恶可恶。其实前端我也一直想看看，因为我虽然会写c但是c永远只是一个终端，我想要的app/软件形式都是靠ai+python或java写的，c++学了也不会写前端啊。据说可以用qt，但是也没听什么人用过，有点冷门，先学这个吧
可是不会前端这个web怎么做到？当然是gemini啦！
其实我一直觉得gemini很好啊不知道为啥大家都说是美国豆包。其实豆包我也觉得很好...主要是图片识别很好，甚至电路图都能识别...

## html 基础

当然咱也是直接搬runboo，当笔记用呗。

1. 标题 用`<h1>``<h2>`等表示（我记得最多h6就和文字一般大了）
2. 段落 用`<p>``</p>` 当然head标题也要`</h1>`，忘了写。注意是正斜杠
3. 链接 用`<a href="https://www.runoob.com">这是一个链接</a>`(href : hypertext reference)
4. 图像 用`<img src="/images/logo.png" width="258" height="39" />`只有一个一个标签捏，标签内自带`/`返回。width，height作`属性`放在标签内。

## 元素 

1. 元素指：从开始标签到结束标签之间的内容
2. 当然我们包含空元素，`<br>`(无结束标签捏)，`<img src="petrol is a idiot" width="我也是苕" height= "idiot不会拼写" / >`(这个是不是呢？它自带正斜杠捏)
3. 元素之间可以相互嵌套（有点像之前看到的一种数据结构（不是语言数据结构，是json,csv之类的）

## 属性

1. 属性用于设置其他信息
2. 多用于起始标签
3. 属性总是以名称/值对的形式出现，比如：`<a href="https://www.runoob.com">这是一个链接</a>` 所以这个链接也是一个属性，也是`=`+`""`
4. 如果出现引号冲突：改用单引号
5. 全局属性：和全局变量相似，所有元素都可以用
6. 特定元素的属性：只有部分元素可以用
7. 布尔属性：布尔属性是指不需要值的属性，它们的存在即表示 true，不存在则表示 false。
8. 自定义属性: 用`data-*`属性储存自定义属性，多用javascript访问（omg我忘记了前端这个其实也和java沾边）（嘿，问gemini发现不一样诶）
`<div data-user-id="12345" data-role="admin">User Info</div>`
9. 事件处理属性: HTML 元素可以通过事件处理属性来响应特定的事件，如点击、鼠标悬停等。



#### 属性卡
***滑动展示全文***
<div style="max-height: 300px; overflow-y: auto;background-color:lightgrey;">

| 属性名 | 适用元素 | 说明 |
| :--- | :--- | :--- |
| **id** | 所有元素 | 为元素指定唯一的标识符。 |
| **class** | 所有元素 | 为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。 |
| **style** | 所有元素 | 直接在元素上应用 CSS 样式。 |
| **title** | 所有元素 | 为元素提供额外的提示信息，通常在鼠标悬停时显示。 |
| **data-\*** | 所有元素 | 用于存储自定义数据，通常通过 JavaScript 访问。 |
| **href** | `<a>`, `<link>` | 指定链接的目标 URL。 |
| **src** | `<img>`, `<script>`, `<iframe>` | 指定外部资源（如图片、脚本、框架）的 URL。 |
| **alt** | `<img>` | 为图像提供替代文本，当图像无法显示时显示。 |
| **type** | `<input>`, `<button>` | 指定输入控件的类型（如 text, password, checkbox 等）。 |
| **value** | `<input>`, `<button>`, `<option>` | 指定元素的初始值。 |
| **disabled** | 表单元素 | 禁用元素，使其不可交互。 |
| **checked** | `<input type="checkbox">`, `<input type="radio">` | 指定复选框或单选按钮是否被选中。 |
| **placeholder** | `<input>`, `<textarea>` | 在输入框中显示提示文本。 |
| **target** | `<a>`, `<form>` | 指定链接或表单提交的目标窗口或框架（如 `_blank` 表示新标签页）。 |
| **readonly** | 表单元素 | 使输入框只读。 |
| **required** | 表单元素 | 指定输入字段为必填项。 |
| **autoplay** | `<audio>`, `<video>` | 自动播放媒体。 |
| **onclick** | 所有元素 | 当用户点击元素时触发 JavaScript 事件。 |
| **onmouseover** | 所有元素 | 当用户将鼠标悬停在元素上时触发 JavaScript 事件。 |
| **onchange** | 表单元素 | 当元素的值发生变化时触发 JavaScript 事件。 |

</div>

## 标题

1. 标题会用于结构化网页，就像pdf的目录（话说额能不能ai自动化加目录···会不会很烧钱···）
2. 水平线：`<hr>`(horizontal rule水平分割线)（`<br>`指break line，换行）
3. 注释：`<!-- 这是一个注释 -->`<!-- 这是一个注释 -->
事实上我在代码里写了这一行哈哈哈当<!-- 这是一个注释 -->然是没有看见的，md和html很像标签也都能用。注：这个尖括号使得他想放在那里就放在那里，可连续（不像c的 `##`后的内容全看不见）

#### 标题卡

<div style="max-height: 300px; overflow-y: auto; background-color:lightgrey">

<h1>这是1号标题（滚动看我）</h1>
<font size="6">这是6号字体文本</font>
<p>这是直接写p</p>
<h2>这是2号标题</h2>
<font size="5">这是5号字体文本</font>
<p>这是直接写p</p>
<h3>这是3号标题</h3>
<font size="4">这是4号字体文本</font>
<p>>这是直接写p</p>
<h4>这是4号标题</h4>
<font size="3">这是3号字体文本</font>
<p>这是直接写p</p>
<h5>这是5号标题</h5>
<font size="2">这是2号字体文本</font>
<p>这是直接写p</p>
<h6>这是6号标题</h6>
<font size="1">这是1号字体文本</font>
<p>这是直接写p</p>
</div>


## 段落

1. `<p>` `</p>`创建段落
2. `<br>`相当于折行，同一段落不同行
3. 所有**连续的**的空行`\n`都只会看成一个**空格**（不是空行）

## 文本格式化

| 代码 | 格式 | 英文缩写 |
| --- | --- | --- |
| `<b>加粗文本</b>` | 加粗文本 | **b**old |
| `<i>斜体文本</i>` | 斜体文本 | **i**talic |
| `<code>电脑自动输出</code>` | 电脑自动输出 | **code** |
| `这是 <sub> 下标</sub> 和 <sup> 上标</sup>` | 这是  下标 和  上标 | **sub**script / **sup**erscript |

## 链接

1. 进行网页之间跳转，也有文件等
2. 用`<a href="URL">链接文本</a>`
3. 点击“链接文本”就会跳转

#### 链接的属性
靠靠靠打这个md笔记也好累啊，ai真是好人，这些表格都好难打都是ai帮我打的，先交了吧····tired····先学到这·····这个part有10个分支点····

1. href: 用来指定链接的目的地，可以是另一个网页、文件、邮件、电话号码或 JavaScript。
2. target： 定义链接打开方式
_blank: 在新窗口或新标签页中打开链接。
_self: 在当前窗口或标签页中打开链接（默认）。
_parent: 在父框架中打开链接。
_top: 在整个窗口中打开链接，取消任何框架。
3. rel:定义连接与目标页面的关系
`nofollow`  表示搜索引擎不应跟踪该链接，常用于外部链接。
`noopener `和` noreferrer`: 防止在新标签中打开链接时的安全问题，尤其是使用 target="_blank" 时。
    3.1 对上述解释
    ____`nofollow` :搜索引擎会用“有多少好网站给你链接”计算网站的排名从而给你推荐，常用于评论限制（防止刷好评）
    ____`noopener` :新的页面实际上可以通过代码访问原来的页面，加入后保护 原页面不被控制
    ____`noreferrer` :保护原网页，让新网页不知道你是从哪个地方点链接进来的
eg:`<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">安全链接</a>`
4. download: 指定文件名下载链接目标`download="example.pdf"`
5. title: 定义额外信息，鼠标悬停显示
6. id： 作为传送锚点，传送到同一页面的不同位置

``` html
<!-- 链接到页面中的某个部分 -->
<a href="#section1">跳转到第1部分</a>
<div id="section1">这是第1部分</div>
```

7. hreflang: 指向链接的url
8. type：指向链接资源的mime类型
`<a href="style.css" type="text/css">样式表</a>`
    8.1解释
    第一种：用于告诉浏览器目标类型，从而优化性能或者打开方式`<a href="manual.pdf" type="application/pdf">下载产品手册 (PDF)</a>`
    第二种： 用于引入css，example如上
9. class：用于指定元素的类名
10. style： 直接在元素上定义css样式

## 头部

<div style="background-color: lightgrey; max-height: 400px; overflow: auto; padding: 10px; border-radius: 5px;">
模拟菜鸟的代码框
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt; 
&lt;meta charset="utf-8"&gt; 
&lt;title&gt;文档标题&lt;/title&gt;
&lt;/head&gt; 

&lt;body&gt;
文档内容......
&lt;/body&gt;

&lt;/html&gt;</code></pre>
</div>

1. title元素定义文章标题
2. base元素：像是文件夹的背景，其他的href可以用在base下相对路径的形式展开，也可以统一默认的链接打开行为
``` html
<head>
<base href="http://www.runoob.com/images/" target="_blank">
</head>
```
3. link: 定义文档与外部资源关系
``` html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
4. style：直接渲染html不借助css
5. meta：元数据metadata，指附加的信息，可以给搜索引擎优化展示，设定字符编码，或者对浏览器控制自动刷新或者跳转（下载链接），兼容性控制放浏览器的渲染引擎等
``` html
<!-- 1. 保证中文不乱码（必写） -->
    <meta charset="utf-8">
    
    <!-- 2. 保证手机打开不缩放（做移动端/响应式必写） -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- 3. 让搜索引擎更好收录你（搜索引擎优化） -->
    <meta name="description" content="我的第一个个人网站">
```

## css
1. 三种使用方式：元素内用style，head区域用style包含css，外部引用css
2. 内联样式，你独一无二，最高优先级
3. 内部样式表
``` html
<head>
<style type="text/css">
body {background-color:yellow;}
p {color:blue;}
</style>
</head>
```
4. 外部样式表
``` html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
当然，这部分的内容我们会在之后学习

## 图像
1. 用img标签
2. src属性，用于装载URL
3. alt属性，用于在图片加载出错时替换
4. 用height，width固定高度和宽度，防止页面布局被破坏


## 表格
1. 用table标签定义，行用tr（table raw）标签，标签td指table data，指数据单元格，th指table header，指表头
``` html 
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>
```
`<thead >` 用于定义表格的标题部分: 在 `<thead > `中，使用 `<th > `元素定义列的标题，以上实例中列标题分别为"列标题1"，"列标题2"和"列标题3"。
`<tbody >` 用于定义表格的主体部分: 在` <tbody >` 中，使用 `<tr >` 元素定义行，并在每行中使用 `<td >` 元素定义单元格数据，以上实例中有两行数据，每行包含三个单元格。

真的很像一个线性代数矩阵啊，或者说多维数组，写多少有多少
好吧其实不像，我只是想说他的列是写多少有多少，看你有几个标题咯

## 列表
1. 分为有序列表和无序列表
2. 无序ul标签，用圆点标记
3. 有序ol标签，用1234标记
4. 列出的每一个元素用`<li>`标签
5. 自定义列表，`<di>`标签
自定义列表以 `<dl>`标签开始。每个自定义列表项以 `<dt>` 开始。每个自定义列表项的定义以 `<dd>` 开始。
好拗口，就是大标题dl，下一级dt，在下一级dd
``` html
<dl>
<dt>Coffee</dt>
<dd>- black hot drink</dd>
<dt>Milk</dt>
<dd>- white cold drink</dd>
</dl>
<dl>
    <dt>another one</dt>
        <dd>small</dd>
</dl>

```
显示如下
<div style="background : lightgrey">
<dl>
<dt>Coffee</dt>
<dd>- black hot drink</dd>
<dt>Milk</dt>
<dd>- white cold drink</dd>
</dl>
<dl>
    <dt>another one</dt>
        <dd>small</dd>
</dl>
</div>
(PS：原来这个`-`是别人自己打的，我还以为自带呢)

## 区块
1. 用div或者span。其实我写md用了好多div
2. div会在其前后显示空行，可以用css控制（很喜欢，这个黑背景就是这个）
3. span可以用在内联元素的文本容器
<div style="background-color: lightgrey; padding: 15px; border-radius: 5px;">

**代码展示：**

```html
<p>我的母亲有 <span style="color:blue;font-weight:bold">蓝色</span> 的眼睛，我的父亲有 <span style="color:darkolivegreen;font-weight:bold">碧绿色</span> 的眼睛。</p>
```

---

**实际效果：**

我的母亲有 <span style="color:blue;font-weight:bold">蓝色</span> 的眼睛，我的父亲有 <span style="color:darkolivegreen;font-weight:bold">碧绿色</span> 的眼睛。

</div>

## 布局

用`<div>`布局是常用的

## 表单
用于收取输入信息
<nl>

<li>form> 元素用于创建表单，action 属性定义了表单数据提交的目标 URL，method 属性定义了提交数据的 HTTP 方法（这里使用的是 "post"）。</li>

<li>label> 元素用于为表单元素添加标签，提高可访问性。
<li>input> 元素是最常用的表单元素之一，它可以创建文本输入框、密码框、单选按钮、复选框等。type 属性定义了输入框的类型，id 属性用于关联 <label> 元素，name 属性用于标识表单字段。
<li>select> 元素用于创建下拉列表，而 option> 元素用于定义下拉列表中的选项。

``` html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head>
<body>

    <h2>表单</h2>

    <form action="/" method="post">
        <!-- 文本输入框 -->
        <label for="name">用户名:</label>
        <input type="text" id="name" name="name" required>

        <br>

        <!-- 密码输入框 -->
        <label for="password">密码:</label>
        <input type="password" id="password" name="password" required>

        <br>

        <!-- 单选按钮 -->
        <label>性别:</label>
        <input type="radio" id="male" name="gender" value="male" checked>
        <label for="male">男</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">女</label>

        <br>

        <!-- 复选框 -->
        <input type="checkbox" id="subscribe" name="subscribe" checked>
        <label for="subscribe">订阅推送信息</label>

        <br>

        <!-- 下拉列表 -->
        <label for="country">国家:</label>
        <select id="country" name="country">
            <option value="cn">CN</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
        </select>

        <br>

        <!-- 提交按钮 -->
        <input type="submit" value="提交">
    </form>

</body>
</html>
```
<div style="background:lightgrey">

<form action="/" method="post">
<!-- 文本输入框 -->
<label for="name">用户名:</label>
<input type="text" id="name" name="name" required>

<br>

<!-- 密码输入框 -->
<label for="password">密码:</label>
<input type="password" id="password" name="password" required>

<br>

<!-- 单选按钮 -->
<label>性别:</label>
<input type="radio" id="male" name="gender" value="male" checked>
<label for="male">男</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">女</label>

<br>

<!-- 复选框 -->
<input type="checkbox" id="subscribe" name="subscribe" checked>
<label for="subscribe">订阅推送信息</label>

<br>

<!-- 下拉列表 -->
<label for="country">国家:</label>
<select id="country" name="country">
<option value="cn">CN</option>
<option value="usa">USA</option>
<option value="uk">UK</option>
</select>

<br>

<!-- 提交按钮 -->
<input type="submit" value="提交">
</form>
</div>

哈哈哈谁绷得住我让gemini帮我把首行缩进全删掉他给我发了一个可供选择的表单哈哈哈

1. 文本域，用type="text"属性让用户输入
2. 密码，用type="password"属性，从而用`*`代替输入
3. 单选框，radio的type
4. 复选框，多选题，checkbox的type
5. 提交按钮，submit的type，


## 边框
1. width,height控制大小
2. frameborder=0可以移除边框
3. 斯国一捏！用边框显示页面。
```html
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>
<p><a href="https://www.runoob.com" target="iframe_a" rel="noopener">RUNOOB.COM</a></p>
```
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>
<p><a href="https://www.runoob.com" target="iframe_a" rel="noopener">RUNOOB.COM</a></p>

可惜，vscode不允许内嵌网页

## 颜色
自己找吧太多了
但是很神奇的是我自己能猜到有哪些颜色
like lightgrey

## 脚本
脚本部分将在JavaScript重点学习
`<script>`用于定义脚本，可以自己包含，也可以指向外部文件。多用于图片操作，表单验证，内容动态更新。
他似乎有很多函数辅助，例如`document.write("helloworld");`（甚至分号），加上id可以控制语句的出现更改等。
当浏览器禁用时，可以执行`<noscript>`标签下的内容（怎么这么像`try`）


## 字符实体

1. html当然不支持`<`和`>`(当然我这里用的汉字当然不是标签)，我们需要像C语言的转义`\`
不过html用的是`&entity_name`  `&#entity_number`
这很难记说实话
2. 不间断空格：多个连续空格和换行都会变成一个空格。用`&nbsp`(non-breaking space)哈哈哈哈哈NB的空格
3. 展示音标，在字母后面写`&#768`等
4. 其他的查表吧

## URL
1. 原来叫这个uniform resource locators