function Child() {
  // 私有属性
  this.child = '儿子'
}
// 静态属性
Child.name = 'static child';
// 原型上的属性

function Parent(){
  this.parent = 'parent';
}
Parent.prototype.smoking = function () {
  console.log('吸烟')
} 
// 只继承公有方法
// function create(ParentProto) {
//   function Fn() {}
//   Fn.prototype = ParentProto;
//   return new Fn();
// }
// 可以实现继承公有方法
Child.prototype = Object.create(Parent.prototype,{constructor:{value:Child}});
let child = new Child;
child.smoking();
console.log(child.constructor);

Object.setPrototypeOf(Child.prototype, Parent.prototype)

//只继承私有属性 再子类中调用父类的方法即可 Parent.call(this)


// 只继承公有方法
// Child.prototype.__proto__ = Parent.prototype;


// let child = new Child;
// console.log(child.constructor);
//错误的 Parent.prototype = Child.prototype


// child继承父类的所有的属性
// Child.prototype = new Parent;
// let child = new Child();
// Child.prototype.eat = function () {
//   console.log('吃')
// }
// console.log(child.parent)
// console.log(child.smoking)


// child.__proto__.eat();
//console.log(child.__proto__=== Child.prototype)
//console.log(Child.prototype.constructor === Child)
// 类分为两部分 私有属性 公有属性

