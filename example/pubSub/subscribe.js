/*
 * @Author: fg
 * @Date: 2022-10-27 10:09:04
 * @LastEditors: fg
 * @LastEditTime: 2022-10-27 11:09:28
 * @Description: 发布-订阅
 */
class Subscribe {
  constructor() {
    // 创建容器
    this.pond = [];
  }
  // 向容器中增加方法，注意去重
  add(fn) {
    let pond = this.pond,
      isExist = false;
    // 去重环节
    pond.forEach((item) => (item === fn ? (isExist = true) : null));
    !isExist ? pond.push(fn) : null;
  }
  remove(fn) {
    let pond = this.pond;
    pond.forEach((item, index) => {
      if (item === fn) {
        // 坑: 这里如果写item=null是无效的
        // eg: let a = {name: function(){}}
        // let b =a.name();
        // 操作b的值对于a的name属性是没有影响的
        pond[index] = null;
      }
    });
  }
  fire(...arg) {
    let pond = this.pond;
    for (let i = 0; i < pond.length; i++) {
      let item = pond[i];
      // 如果item为空了，最好把它删除掉
      if (item === null) {
        pond.splice(i, 1);
        // 如果用了splice要防止数组塌陷问题，即删除了一个元素后，后面所有元素的索引默认都会减1
        i--;
        continue;
      }
      item(...arg);
    }
  }
}

window.Subscribe = Subscribe;
