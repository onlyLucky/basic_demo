<div align="center">
  <h1>this、call 和 apply</h1>
  <p>分类：阅读笔记</p>
  <p>代号：R001/2</p>
</div>

## 目录

- [目录](#目录)
- [简介](#简介)
- [1.this](#1this)
  - [1.1 作为对象的方法调用。](#11-作为对象的方法调用)
  - [1.2 作为普通函数调用。](#12-作为普通函数调用)
  - [1.3 构造器调用](#13-构造器调用)
  - [1.4Function.prototype.call 或 Function.prototype.apply 调用](#14functionprototypecall-或-functionprototypeapply-调用)
  - [1.5 丢失的 this](#15-丢失的-this)

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

### 1.1 作为对象的方法调用。

```js
var obj = {
  a: 1,
  getA: function () {
    console.log(this === obj); // 输出：true
    console.log(this.a); // 输出： 1
  },
};

obj.getA();
```

当前对象中的 this 指向当前对象

### 1.2 作为普通函数调用。

```js
window.name = "globalName";
var myObject = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var getName = myObject.getName;
console.log(getName()); // globalName
```

此时的 this 总是指向全局对象。在浏览器的 JavaScript 里，这个全局对象是 window 对象。即使当前对象中属性值为函数

当在 div 节点的事件函数内部，有一个局部的 callback 方法

```js
window.id = "window";
document.getElementById("div1").onclick = function () {
  console.log(this.id); // 输出：'div1'
  var callback = function () {
    console.log(this.id); // 输出：'window'
  };
  callback();
};
document.getElementById("div2").onclick = (e) => {
  console.log(this.id, e.target.id); // 输出：'window' 'div2'
  var callback = function () {
    console.log(this.id); // 输出：'window'
  };
  callback();
};
```

在 ECMAScript 5 的 strict 模式下，这种情况下的 this 已经被规定为不会指向全局对象，而是 undefined：

```js
function func() {
  "use strict";
  console.log(this); // 输出：undefined
}

func();
```

### 1.3 构造器调用

JavaScript 中没有类，但是可以从构造器中创建对象，同时也提供了 new 运算符，使得构造器看起来更像一个类。

```js
var MyClass = function () {
  this.name = "sven";
};

var obj = new MyClass();
console.log(obj.name); // 输出：sven
```

如果构造器显式地返回了一个 object 类型的对象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的 this：

```js
var MyClass = function () {
  this.name = "sven";
  return {
    name: "anne",
  };
};

var obj = new MyClass();
console.log(obj.name); // 输出：sven
```

如果构造器不显式地返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述问题

### 1.4Function.prototype.call 或 Function.prototype.apply 调用

```js
var obj1 = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var obj2 = {
  name: "anne",
};

console.log(obj1.getName()); // 输出： sven
console.log(obj1.getName.call(obj2)); // 输出：anne
```

### 1.5 丢失的 this

```js
var obj1 = {
  name: "sven",
  getName: function () {
    return this.name;
  },
};

var obj2 = {
  name: "anne",
};

console.log(obj1.getName()); // 输出： sven
console.log(obj1.getName.call(obj2)); // 输出：anne
```
