/*
 * @Author: fg
 * @Date: 2022-10-26 11:32:25
 * @LastEditors: fg
 * @LastEditTime: 2022-10-26 14:14:54
 * @Description: drag
 */

class Drag {
  // ele 为传入的dom对象
  constructor(ele) {
    // 初始化对象
    this.ele = ele;
    ["strX", "strY", "strL", "strT", "curL", "curT"].forEach((item) => {
      this[item] = "";
    });
    // 为按下鼠标绑定事件，事件函数一定要绑定this，在封装过程中this统一指定为实例对象
    this.DOWN = this.down.bind(this);
  }
  down(ev) {
    let ele = this.ele;
    this.strX = ev.clientX; //鼠标点击处到浏览器窗口的最左边的距离
    this.strY = ev.clientY; //鼠标点击处到浏览器窗口的最上边的距离
    this.strL = ele.offsetLeft; //元素到浏览器最左边的距离
    this.strT = ele.offsetTop; //元素到浏览器窗口最上边的距离

    this.MOVE = this.move.bind(this);
    this.UP = this.up.bind(this);
    document.addEventListener("mousemove", this.MOVE);
    document.addEventListener("mouseup", this.UP);

    // flag
    // 清除上一次点击形成的一些定时器和变量
    clearInterval(this.flyTimer);
  }
  move(ev) {
    let ele = this.ele;
    this.curL = ev.clientX - this.strX + this.strL;
  }
  up(ev) {}
}
