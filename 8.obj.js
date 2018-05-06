// Object.setPrototypeOf
let obj2 = {
  name:'jw'
}
let a = 1;
let obj = {
  a,
  name:'zfpx',
  __proto__:obj2,
  getParentName(){
    return super.name
  }
}
console.log(obj.getParentName());

// 再es5中没有类的概念 es6类
// 继承