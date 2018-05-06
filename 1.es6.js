// ECMAScript es5 es6
// 数组的方法 对象的方法 函数 。。。。

// 1.变量的声明 var 用什么取代掉了 let const
// var 的特点 
// 1) 不支持作用域的概念 全局作用域 函数作用域
(function () {
  var a = 1;
})();
console.log(window.a);
for (var i = 0; i < 3; i++) {
}
console.log(i);
// 不要污染全局
let a = 1;
console.log(window.a);
// --------------------
for (let i = 0; i < 3; i++) {

}
console.log(i);
// 以前的闭包可以写成{}
{
  let a = 1;
}
console.log(a);
// ------------------
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  })(i);
}
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}

// 2.let不支持重复定义(不能再同一个作用域内)
// 暂存死区，如果作用域内声明过这样一个变量 当前变量会被保存到当前作用域下
let a = 100;
{
  console.log(a);
  let a = 200;
}
// 不要写这样的代码
// 3.let不支持变量提升 预解释
console.log(a);
let a = 1;

// 4.var 不支持声明常量 （不可更改的量）
let PI = 3.14;
PI = 3.15;
// let可以修改 const不能修改，不能改引用地址
const a = {a:1}
a = 2;
