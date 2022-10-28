/*
 * @Author: fg
 * @Date: 2022-10-28 09:53:38
 * @LastEditors: fg
 * @LastEditTime: 2022-10-28 10:22:49
 * @Description: drag Extend
 */
function extendDrag(drag) {
  // 鼠标按下
  let stopAnimate = function (curEle) {
    clearInterval(curEle.flyTimer);
    curEle.speedFly = undefined;
    clearInterval(curEle.dropTimer);
  };
  // 鼠标移动
  let computedFly = function (curEle) {
    if (!curEle.lastFly) {
      curEle.lastFly = curEle.offsetLeft;
      curEle.speedFly = 0;
      return;
    }
    curEle.speedFly = curEle.offsetLeft - curEle.lastFly;
    curEle.lastFly = curEle.offsetLeft;
  };
  // 水平方向的运动
  let animateFly = function (curEle) {
    let minL = 0,
      maxL = document.documentElement.clientWidth - curEle.offsetWidth,
      speed = curEle.speedFly;
    curEle.flyTimer = setInterval(() => {
      speed *= 0.98;
      Math.abs(speed) <= 0.1 ? clearInterval(animateFly) : null;
      let curT = curEle.offsetLeft;
      curT += speed;
      if (curT >= maxL) {
        curEle.style.left = maxL + "px";
        speed *= -1;
        return;
      }
      if (curT <= minL) {
        curEle.style.left = minL + "px";
        speed *= -1;
        return;
      }
      curEle.style.left = curT + "px";
    }, 20);
  };
  let animateDrop = function (curEle) {
    let speed = 9.8,
      minT = 0,
      maxT = document.documentElement.clientHeight - curEle.offsetHeight;
    curEle.dropTimer = setInterval(() => {
      speed += 10;
      speed *= 0.98;
      Math.abs(speed) <= 0.1 ? clearInterval(animateFly) : null;
      let curT = curEle.offsetTop;
      curT += speed;
      if (curT >= maxT) {
        curEle.style.top = maxT + "px";
        speed *= -1;
        return;
      }
      if (curT <= minT) {
        curEle.style.top = minT + "px";
        speed *= -1;
        return;
      }
      curEle.style.top = curT + "px";
    }, 20);
  };
  drag.subDown.add(stopAnimate);
  drag.subMove.add(computedFly);
  drag.subUp.add(animateFly);
  drag.subUp.add(animateDrop);
}
