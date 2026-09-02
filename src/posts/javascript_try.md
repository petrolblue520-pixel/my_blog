---
title: javascript_try
date: 2026-08-24
tags: [代码,javascript, 前端]
---

时隔10days，开始新的语言学习，maybe i can finish it beore 30 and duplicate a school web.


## 基础语法

### `<script>`标签

在body，head中间插入`<script>`标签就可以在这一部分执行JavaScript代码。或者，直接在外部写`.js`文件，在script标签中用scr引入外部JavaScript文件

### 输出

1. window.alert() 弹出警告窗。括号里的内容类似于python，你可以写计算式（他会算出来再输出），写变量名（发现也和python一样，在script部分直接写名字+赋值自动确定变量类型），写双引号包裹输出内容。
2. 操作HTML元素，使用`document.getElementById(id)`用id标识某个HTML元素，并用`innerHTML`来获取或插入元素内容。
``` html
<p id="demo">我的第一个段落</p>

<script>
document.getElementById("demo").innerHTML = "段落已修改。";
</script>
``` 
可以用`document.write()`写内容，但是如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。

### 语法

1. 字面量（数字，字符串，表达式），
数组字面量`[40,100,12]`，
对象字面量`{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}`,
函数字面量`function myFunction(a, b) { return a * b;}`
2. 定义变量：使用`var`，定义所有变量
3. 语句之间分号间隔，双斜杠后面内容作为注释，
哎，现在就不想学了，努力学习1h后的我只想到处闲逛，重新回到电脑前一个字也不想打，不想动脑。

### 语句标识符
仅列出和c不同的part
1. catch 这个和python的try很像，先尝试try语句块是否正常，否则执行catch。
2. for/for...in。 for转置执行次数，in则规定范围用于遍历数组 
3. function 定义一个函数
4. throw 生成错误
5. var 声明变量

**折行**，折行只能存在于文本字符串中。即被双引号包裹的那一段。代码块不能折行

### 注释

完蛋我已经忘记c的注释。
JavaScript注释，`//`or`/*`+`*/`

### 变量

三种声明方式
var：ES5 引入的变量声明方式，具有函数作用域。
let：ES6 引入的变量声明方式，具有块级作用域。
const：ES6 引入的常量声明方式，具有块级作用域，且值不可变。

函数作用域，在整个函数内都可以访问。块级作用域只在最近的`{}`内有效，例如`if` `for` `while`等
``` javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i)); // 输出 3, 3, 3（因为 i 是全局/函数级）
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j)); // 输出 0, 1, 2（每次循环 j 都是独立的块级绑定）
```
上例理解需要先看settimeout()，他现将需要执行的任务放进队列，等待for循环的同步任务执行完成在执行

未被赋值的变量值为undefined


### 数据类型
1. 动态数据类型：相同的变量可以赋值为不同的类型，可以用typeof查看变量的数据类型。
2. 检测数组类型。直接用typeof会得到object。应当用Array.isArray()判断
``` javascript
typeof [1,2,3,4]             // 返回 object
Array.isArray([1,2,3]);      // true
[1,2,3] instanceof Array;    // true
```
3. 只有一种数字类型，小数整数同类型，支持科学计数法
4. 声明数组

``` javascript
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
//======or========//
var cars=new Array("Saab","Volvo","BMW");
//======or========//
var cars=["Saab","Volvo","BMW"];
```
5. 对象
类似于c的struct，python的dictionary。用属性名+值定义
`var person={firstname:"John", lastname:"Doe", id:5566};`
查找对象属性`name=person.lastname; (or)name=person["lastname"];`
通过设定null使变量恢复到undefined
6. 声明变量类型
``` javascript
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```
他可以不声明，也可以用`new`声明

### 对象

对象可以是一个变量，也可以是用键值对的形式展开
`var car = "Fiat";`
`var car = {name:"Fiat", model:500, color:"white"};`

访问对象属性
`person.lastName;`
`person["lastName"];`

对象方法（对象内的函数）
``` javascript
var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};
```
调用方法
``` javascript
document.getElementById("demo").innerHTML = person.fullName();
```
注意调用时最后的括号，不加括号不会引发函数调用直接输出函数代码内容like `function() { return this.firstName + " " + this.lastName; }`而非目标`John Doe`

## 函数

与c别无二致，甚至传参更简单，因为不用写var myint而是直接myint无需声明变量类型。
函数返回值也不影响定义写法，都是`function myfunction_name(myint)`

### 作用域
全局变量是window对象
函数内部定义的变量传递给外部，可以用window.a=a,再在外部调用window.a得到a的值
隐式声明，不加var的，会默认为window对象

## 正则表达式

用`/`框选处一段文字内容作为等待筛选的内容，用search()/replace()工作
``` javascript
//使用正则表达式搜索 "Runoob" 字符串，且不区分大小写：
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
//输出结果为  6
```
相当于数组，从0开始，0-based，匹配起始位置

``` javascript
//使用正则表达式且不区分大小写将字符串中的 Microsoft 替换为 Runoob :
var str = document.getElementById("demo").innerHTML; 
var txt = str.replace(/microsoft/i,"Runoob");
//结果输出为:Visit Runoob!
```

正则修饰符：
使得其在全局搜索中适配不同情况
类型很多可查表

test() 用于判断是否存在于字符串中

exec() 检索字符串的正则表达式的匹配，返回**数组**存放匹配结果










## JS HTML DOM





<hr>


## 输出







## 字符串/字符串编码






## 数组/对象










## 计时时间












## 表单/表单验证






<hr>



## JSON



## 异步编程 / Promise / async/await






## JavaScript Window / Location













































