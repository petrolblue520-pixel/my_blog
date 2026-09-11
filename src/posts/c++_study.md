---
title: c++学习
date: 2026-09-09
tags: [c++, 语言]
cover: ../needed_file_code_picture_video/屏幕截图 2026-09-09 112736.png
---

## class 1

### 结构体和类

1. 结构体别无二致
2. 类 不同定义的部分有权限，允许**私有**（只允许内部函数调用访问），公有，可以放入函数

### 编译与链接过程

1. 源文件.cpp，源码
2. 编译，将`cpp`翻译成目标文件（.obj/.o）
3. 链接，多个obj以及库文件装配在一起，生成exe文件
 
### c++标准骨架

1. 命名空间 `using namespace std;`