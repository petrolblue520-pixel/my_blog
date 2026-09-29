---
title: 计算机视觉
date: 2026-09-14
tags: [图形学,笔记]
---



## 一、绪论

然而，绪论并没有像我想的那样简单

### 1.4 目标，资源和速度的抽象

1. 先了解背后的物理原理，再在有限时间，处理器性能下确定最优近似方法
2. **睿智建模方法**
   * ① 矩形数组
   * ② 三角形顶点存储
   * ③ 可存储矩形数组的数据结构，允许合并成更大矩形
3. **实景模型**
   * ① 自身物理模型 → 海浪因周围水的力而起伏
   * ② 数学模型 → 用时序函数刻画奇点位移
   * ③ 计算模型 → (没看懂书上在说什么……) 海面在将来某个时刻的状态由当前状态决定，这可通过有限差分来逼近所有导数，然后用一个线性方程组实现。
4. 考虑人类视觉系统的影响，从而优化运算

### 1.5 图形学中的常数和一些参数值的量级

物理真的很重要……

1. 用物理计算区分阳光与白炽灯照射下，单位面积单位时间打入的光子数目，白天与黑夜进入人眼的光子比达 \(10^{10}\)
2. 动态亮度范围：最亮像素与最暗像素光能比
3. 直视白炽灯穿过感光像素接收约 \(10^{6}\) 光子，而看同地一块灰色地毯约 100 个 PS：这事实上仅用于了解

### 1.8 基本图形系统

模型空间/对象空间坐标系，场景空间坐标

相机空间坐标/相机坐标系

规格化设备坐标

像素坐标

### 1.10 图形系统的交互

按下交互按钮应用“回调”你写的函数等，callback以引起改变

## 二、2D图形学简介 —— 基于WPF

### 2.2 2D图形学流水线

AM → 场景生成器 → 场景 → 图形平台 → GPU → 屏幕.

### 2.3 2D 图形学的演变

#### 2.3.2 即时模式与保留模式

##### 即时模式（Immediate Mode, IM）
- 直接、高效地访问绘制接口/图形状态。
- 每修改一次都会重绘整个场景。

##### 保留模式（Retained Mode, RM）
- RM 平台创建一个专用数据库，用于保留绘制和观察所需的场景表示。
- 允许对场景进行增量式修改。

##### RM 与 UI 控件
- 涉及外观与动态行为。
- 动态行为包括：
  - 内置自动反馈：例如按钮按下时高亮。
  - 面向语义/应用的行为：例如提交表单。

##### 2D 与 3D 差异
- **2D：** RM 被广泛采用。
- **3D：** RM 没那么流行。
  - 虽然 3D RM 平台在层次建模、刚体动画方面很强，
  - 但非常消耗资源。

### 2.3.3 过程语言和描述性语言

#### 两种语言

过程式语言：描述命令，逻辑，循环等
描述性语言：也叫做声明式，描述场景是怎样的。图形场景当然适合描述性语言

#### WPF的三层

1. 底层API，面向对象的。
2. 中间层XAML，类似HTML/XML，描述场景
3. 最上层工具。

### 2.4.1 XAML 应用程序结构

XAML类似于HTML，用标签创建一颗树。

### 2.4.2 采用抽象坐标系定义场景

1. 坐标系原点位于画布左上角，向右为x，向下为y。
2. 堆叠覆盖：新定义的元素会覆盖在旧定义的元素之上。

### 2.4.3 坐标系的选择范围

1. 多用抽象坐标，之后再让抽象坐标转向画布坐标。

### 2.4.4 WPF画布坐标系

1. WPF为方便，将96个设备无关单位(DIU)定义为1英寸，不过只在理想设备上是，实际屏幕不一定是。但是这不是一个共有标准。移植其他平台需要额外处理

### 2.4.5 使用显示变换

1. 缩放，解决尺寸问题：给画布附加一个`RenderTransform`实现。
``` xml 
<Canvas ...>
    <!-- THE SCENE -->
    <Ellipse ... />

    <!-- DISPLAY TRANSFORMATION -->
    <Canvas.RenderTransform>
        <TransformGroup>
            <ScaleTransform ScaleX="4.8" ScaleY="4.8"
                            CenterX="0" CenterY="0"/>
        </TransformGroup>
    </Canvas.RenderTransform>
</Canvas>
```
需要指定变换中心，其他的点相对于这个点远离或者靠近。
2. 平移，解决位置：
``` xml
<Canvas.RenderTransform>
    <TransformGroup>
        <ScaleTransform ScaleX="4.8" ScaleY="4.8" ... />
        <TranslateTransform X="48" Y="48" />
    </TransformGroup>
</Canvas.RenderTransform>
```

### 2.4.6 构造并使用模块化模板

1. 定义模板：类似函数，我们可以定义模板
``` xml
<Canvas.Resources>
    <ControlTemplate x:Key="ClockHandTemplate">
        <Polygon Points="-0.3,-1  -0.2,8  0,9  0.2,8  0.3,-1"
                 Fill="Navy" />
    </ControlTemplate>
</Canvas.Resources>
```
controltemplate 创建模版，x:Key关键字表示出模板名称。
Polygon创建多边形，Points定义多边形的点，依次连接形成一个多边形。
2. 实例化（放到画布里）：
``` xml
<Control Name="MinuteHand"
         Template="{StaticResource ClockHandTemplate}" />
```
创建控件，名为MinuteHand，模板用`{StaticResource ClockHandTemplate}`.staticResource指在这个资源库里面找东西。而之前我们就定义了ClockHandTemplate这个模板。
3. 建模变换：例如创建一个时钟指针。同时有时针分针。时针更粗，用建模变换。
``` xml
<Control Name="HourHand"
         Template="{StaticResource ClockHandTemplate}">
    <Control.RenderTransform>
        <TransformGroup>
            <ScaleTransform ScaleX="1.7" ScaleY="0.7"
                            CenterX="0" CenterY="0"/>
            <RotateTransform Angle="45"
                             CenterX="0" CenterY="0"/>
        </TransformGroup>
    </Control.RenderTransform>
</Control>
```
外部control表式，对name是···，template是···的做出修改
RenderTransform表示渲染变换。
transformgroup则表示修改的部分。

**变换顺序很重要**，先缩放后旋转，否则旋转后再缩放容易变斜。

## 三、绘图
实际上，这一章原名是“一个古老的绘制器”，但是所谓的丢勒我认为是这一章变得更加复杂。我选取了其中的3.3节作为主要部分。
1. 两种绘图方法：先映射所有点再连线/一边映射点一边连线。两者在性能上有差异，在未来会讲到。但对规格较小的影响不大。
2. 标准化的设备坐标 我们将x,y转化为在0~1之间的值，从而在显示在显示器上时直接乘以一个值就可以扩展成想要的大小。