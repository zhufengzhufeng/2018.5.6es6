// 数组的常用方法
//1.将类数组转化成数组的方式 Array.from();
//2.[...arguments]
//3.类数组？ 有索引 有长度
// 函数能被迭代要求有一个迭代器函数，函数必须返回一个带有next方法的对象
let obj = {
  0: '1',
  1: '2',
  2: '3',
  length: 3,
  [Symbol.iterator]: function () { // 可以自己实现迭代方法
    let key = 0;
    let that = this; // 迭代器中的this就是这个对象
    let len  = this.length
    return {
      next() {
        return {
          value: that[key], // 迭代出的结果
          done: (len === key++)?true:false //  是否迭代完成
        }
      }
    }
  }
};
console.log(Array.from(obj));
//console.log([...obj]);

// 如果要通过...obj的方式需要有一个迭代器

// function  fn() {
//   let args = [...arguments];
//   console.log(args instanceof Array);
// }
// fn(1,2);