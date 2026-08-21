---
title: css尝试
date: 2026-08-14
tags: [代码,css, 前端]
---

虽然我是写8.14，但是实际上我会在8.15开始学，今天在干不背单词，很好几天不背就有136个要复习了哈哈哈哈

## 语法

1. 一条css代码由两部分构成，选择器以及声明。
2. 选择器选择一个元素，声明用属性和值构成，多用分号隔开】
3. 注释用`/*`和`*/`构成
``` css
p
{
    color:red;
    text-align:center;
}
```

## id和class

1. id选择器为有目标id的进行特殊化操作。id是唯一的，一个id只能对应一个元素。
2. 用id控制的css语句，选择器必须加`#`+id
``` css
#para1
{
    text-align:center;
    color:red;
}
```
3. class选择器用于一组元素的描述，类选择器用一个`.`选择
``` css
.center {text-align:center;}
```
4. 也可以在指定的元素类型下用类选择器
``` css
p.center {text-align:center;}
```
**注**：这些都不应该以数字开头命名

## 创建
插入样式表有三种形式，内部，外部，内联
1. 外部，用`<link>`标签中添加`<link rel="stylesheet" type="text/css" href="mystyle.css">`**注**：不要在属性值与单位之间放空格`20px` `20 px`（选前者）
2. 内部，在`<head>`下的`<style>`下放置
3. 内联，在标签内写
4. 多重样式：内联>内部>外部，如果内联没有写，则会继承内部或者是外部的
5. 多重样式顺序，更具体在`<head>`标签中的顺序。先link后内部style，则会用后来的style。如果先style再link，则会看最后的link

## 背景


1. background-color
三种表现形式，十六进制 #ff0000
rgb rgb(255,0,0)
名称 red


2. background-image
`background-image:url('paper.gif');`用url()框柱目标链接，可以是相对路径，相对路径是当前css文件下的开始。可以不加引号。

3. background-repeat
默认下，背景图片会在水平或者竖直下平铺，可以`background-repeat`控制`repeat-x`（水平方向）等

4. background-attachment
默认情况下背景会随着滚轮下滑而向上滑动消失。attachment可以控制固定。

5. background-position
用position控制背景图片在的位置`right top`等

**注**：实际上，可以通过简写将多个属性合并到一个框中
`body {background:#ffffff url('img_tree.png') no-repeat right top;}`

## 文本

1. 颜色，如上文一样
2. 对齐方式，用`text-align`属性控制，例如center,right,justify(永远左右对齐覆盖这个框)
3. 文本修饰 `text-decoration` 多用于下划线`none`，也有`overline`,`line-through`,`underline`
4. 文本转换，就是大小写，`text-transform` 
5. 缩进，`text-indent`
还有很多，互联网是个好东西

## 字体
1. `font-faminy`用于字体系列，将多个字体名设为候选，当有不支持时选择后序字体
2. 字体样式,斜体等
3. 字体大小，`font-size`,单位px，许多人也用em单位防止无法调整文本的问题（还没遇到过），1em=16px。
4. 百分比。在body中字体大小用百分比，可以快速调节所有字体大小

## 链接样式

1. 链接有四种状态
a:link - 正常，未访问过的链接
a:visited - 用户已访问过的链接
a:hover - 当用户鼠标放在链接上时
a:active - 链接被点击的那一刻
按上述顺序否则定义容易无效
2. 可以链接，改下划线，背景等

## 列表
1. 多种列表标识展示形式，`list-style-type`可以改`circle`,`square`,`upper-roman`,`lower-alpha`.也可以移除用none
2. 列表表示也可以塞图片，`list-style-image:url("...")`
3. 简写属性，需要按照固定顺序，可以少写
list-style-type
list-style-position 
list-style-image
``` css
ul
{
    list-style: square url("sqpurple.gif");
}
```

## 表格

1. 实在懒得写，真觉得到时候再查也不迟。多为边框样式，高宽，文字对齐，背景，颜色等

## 盒子模型

1. 四部分，外边距margin，边框border，内边距padding，内容content
2. 外边距永远透明，背景颜色也不控制，展示的是body背景下的东西。
3. 盒子的width指的是内容的宽度。

## 边框

1. 边框样式，边框宽度，颜色可以控制。也可以单独控制单个边

## 轮廓outline

1. 轮廓值元素周围的一条线。

## 分组与嵌套选择器
p{ }: 为所有 p 元素指定一个样式。
.marked{ }: 为所有 class="marked" 的元素指定一个样式。
.marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。
p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。

先出现谁先筛选谁

## 显示

1. 两种，display:none会不展示，不占空间,visibility:hidden只是看不见，仍然占着位置
2. 元素分为块元素和内联元素，可以修改，display:inline/block


## 溢出显示


| 属性值   | 描述                                                           |
| :------- | :------------------------------------------------------------- |
| visible  | 默认值。内容不会被修剪，会呈现在元素框之外。                    |
| hidden   | 内容会被修剪，并且其余内容是不可见的。                          |
| scroll   | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。        |
| auto     | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。        |
| inherit  | 规定应该从父元素继承 overflow 属性的值。                       |

## 组合选择符

用于选择两个选择器之间的关系
后代选择器(以空格  `  ` 分隔)
子元素选择器（以大于 `>`号分隔）
相邻兄弟选择器（以加号 `+`分隔）
普通兄弟选择器（以波浪号 `～` 分隔）

1. 后代选择器，指存在在里面的所有后代。
2. 子元素，只能选择作为某元素直接/一级子元素的元素。
例如，存在关系div包含span包含p，对于选择div>p，由于我们只看第一层，刚刚的例子中p其实是孙子，而非孩子，所以不能选中。
css选择器默认是全局扫描，会对所有div>p选择
3. 相邻兄弟选择器。选择紧接在另一元素后的某个元素，且二者有相同父元素。
这说明两者是相同的环境下同等身份的，只是出现地点不同。
例如：div+p指在div**结束后**的下一个p，且只找一个p
4. 后继兄弟选择器。选取所有指定元素之后的相邻兄弟元素。和相邻兄弟类似，但是可以选择多个


## 伪类

伪类用于添加一些选择器的特殊效果 伪类(Pseudo-classes) 
1. 伪类像是将不同状态，特定地点的元素组成一个类。例如，`<a>`的点击状态，`first-child`作为位置伪类
2. first-child伪类的选择代码有些特别，不同的位置有不同结果
|代码|选中目标|
|---|---|
|p:first-child|选中作为其父元素第一个子节点的 <p>|
|p>i:first-child|选中属于 <p> 直接子节点且处于第一个位置的 <i>|
|p:first-child i|选中作为父元素第一个子节点的 <p> 内部的所有 <i>|

总结：`i:first-child`，这个元素是i，并且是他父元素第一个子节点。就像是i的一个标签，说明你是家里最大的。这个家很大，除了你自己i类外，还可能有x,y,z类，但是即使包含这些，你也是最大的

3. lang 伪类
`:lang` 伪类使你有能力为不同的语言定义特殊的规则


## 伪元素
CSS 伪元素是一种特殊的选择器，它可以在不改变 HTML 结构的情况下对页面元素的特定部分进行样式设置。
CSS 伪元素是用来添加一些选择器的特殊效果。
常用的 CSS 伪元素有 ::before、::after、::first-line、::first-letter 等。

1. first-line

用于设置文本的首行。这个首行与段落无关，甚至会随着由于窗口移动造成的改变而改变。
但是，`first-line`只适用于**块级元素**
2. :first-letter
设置首字母

3. :before
在元素之前插入新的内容

4. after
与上面相反




## 属性选择器


## ！important



## 导航栏

导航栏用链接列表设置，li或者ol
1. 链接a用display:block让整个区域都变成可以点击的内容
2. 链接用text-decoration : none
3. 注意鼠标与链接互动的伪类
4. **全屏高度固定导航条** 用100%百分比设定height或width，用于竖直或者横放。position：fix。
5. 默认下，列表的`<li>`为块元素，用display：inline限制改为横置导航栏
6. 限制宽度。用float+block。用父容器li的float限制a元素的高度从而水平排列

## 图片库


## 表单


## 图像透明/不透明


<hr>

## 对齐


## 下拉菜单

1. 关键在于，用一个原本的display:none的，用hover触发时覆盖成display:block



## 提示工具

#### 基础提示框
移动到指定的元素上显示。
这个div框我们多用tooltip作为class，附带一个class="tooltiptext"的span作为提示文本，用伪类.tooltip:hover+空格选择器.tooltiptext控制这个部分的所有提示文本，修改他们的visibility:visible
#### 定位提示工具。

##### 前提
对于容器我们一般是position: relative，而提示框是absolute，他会基于容器的位置定位，也就是我们的正文tooltip的div框

##### 右侧
``` css
.tooltip .tooltiptext {
  top: -5px;
  left: 105%;
}
```
这里的`top` `left`都是基于tooltip的div而言的。所以top,left都是说在tooltip的上边界隔着多少，左边界隔着多少。
left:105%，他在div左边界向右走105%的位置，也就是div框右侧5%。
top:-5px，是因为提示框有上下5px的内边距，这样上移5px可以是文字更加居中。

##### 顶部
``` css
.tooltip .tooltiptext {
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}
```
参照哪个边框就是调整哪个边框。例如,看bottom，就是容器的下侧和我新元素的下侧。left就是容器left和目标left边框

