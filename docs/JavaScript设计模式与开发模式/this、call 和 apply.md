<div align="center">
  <h1>this、call 和 apply</h1>
  <p>分类：阅读笔记</p>
  <p>代号：R001/2</p>
</div>

## 目录

- [目录](#目录)
- [简介](#简介)
- [1.this](#1this)

## 简介

> &emsp;&emsp;在 JavaScript 编程中，this 关键字总是让初学者感到迷惑，Function.prototype.call 和 Function.prototype.apply 这两个方法也有着广泛的运用。

参考代码:

- [this.html](../../example/R001/2/this.html)

## 1.this

&emsp;&emsp;JavaScript 的 this 总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

**具体到实际应用中，this 的指向大致可以分为以下 4 种。**

- 作为对象的方法调用。
- 作为普通函数调用
- 构造器调用。
- `Function.prototype.call` 或 `Function.prototype.apply` 调用。
