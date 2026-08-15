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
2. 子元素，只能选择作为某元素直接/一级子元素的元素。我理解上，是第一个找到的类下的所有元素。例如`div>p`找到第一个div下的所有p


## 伪类


## 伪元素



## 属性选择器


## ！important



## 导航栏


## 图片库


## 表单


## 图像透明/不透明


<hr>

## 对齐


## 下拉菜单


## 提示工具