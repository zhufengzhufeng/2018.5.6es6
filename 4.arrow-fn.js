// 函数新增的功能
// 1.可以实现默认参数
function ajax(a = 1, b = 2) {
  console.log(a, b)
}
ajax(3);

// 参数的剩余 剩余运算符 
function sum(currency, ...args) {
  return currency + eval(args.join('+'));
}
console.log(sum('$', 1, 2, 3, 4, 5));


// 箭头函数 (函数会变量提升) 箭头函数中不用function关键字
// function a(a) {
//   return {name:'zfpx'}
// }
// let a = a =>  ({name:'zfpx'});
// console.log(a());

// 函数可以返回函数
// 高阶函数 函数可以当作参数传递 或者函数返回函数
// function a(x) {
//   return function (y) {
//     return x + y
//   }
// }
let a = x => y => x + y;

// 1.箭头函数不用function关键字
// 2.箭头函数不写return 可以不写 {}
// 3.箭头函数如果只有一个参数可以省略()
// 闭包：作用域不释放 私有化
// 函数执行的一瞬间也会产生闭包
// 函数的返回值是一个引用数据类型，被外部变量接收 这个作用域无法释放

// 箭头函数内部没有this指向，箭头函数没有arguments 

// 1.谁调用,this就是谁
// 2.箭头函数没this,this指代的是上一级的this
// 3.没有arguments 需要自己创造arguments
let a = 2; // 不会声明到全局上
let obj = { // 对象不是作用域
  a: 1,
  fn: () => {
    setTimeout(() => {
      console.log(this.a)
    })
  }
}
obj.fn();
let a = (...arguments) =>{
  console.log(arguments);
}
a(1,2,3,4,5);



// this 变量提升 作用域 原型链