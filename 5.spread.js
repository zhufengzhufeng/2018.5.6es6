// 剩余运算符 ...
function b(c, d) {
  console.log(c, d)
}
function a(...args) {
  let arr = args.slice(2);
  b(...arr);
}
a(1, 2, 3, 4)
// 展开元算符 ...
// call apply bind可以改变this指向
Math.min.apply(Math, [1, 2, 3, 4, 5]);
Math.min(...[1, 2, 3, 4, 5]);

// 对象也可以展开 深拷贝和浅拷贝
// ...只会拷贝一层 如果有多层的情况  需要一层层的展开
let obj1 = { name: { name: 'zfpx' }, a: 1 };
let obj2 = { age: 9 };
let obj3 = { ...obj1, name: { ...obj1.name }, ...obj2 };
obj3.name.name = 'jw;';
console.log(obj1);


// 深拷贝 现在的对象 和以前的没有关系
// JSON.parse(JSON.stringify并不支持函数和正则
let obj = { name: { name: 1 }, reg: /a/ };
let obj1 = JSON.parse(JSON.stringify(obj));
obj.name.name = 2
console.log(obj1);

// 需要递归拷贝 
function deepClone(obj) {
  // 如果传递的是null 那就不处理
  // 函数没有引用关系
  if (typeof obj !== 'object') return obj;
  if (obj == null) return null;
  // 处理日期和正则
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  let instance = new obj.constructor(); // 看当前实例的constructor
  // 实现深拷贝
  for (let key in obj) {
    instance[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return instance;
}
// 函数不需要重新拷贝
let obj = { a: { a: 1 } }
let newObj = deepClone(obj);
obj.a.a = 2;
console.log(newObj);


