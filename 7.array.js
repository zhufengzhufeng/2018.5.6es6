// es5 reduce 叠加 收敛 map映射
// forEach filter 过滤 (find es6) some every
// inlcudes(es7)
// 声明式和编程式

// let r = [1,2,3]
// let result = r.reduce((prev,next,currentIndex,array)=>{
//   return prev+next;
// });
// console.log(result);
Array.prototype.myReduce = function (fn,prev) {
  for(var i =0 ;i<this.length;i++){
    if(typeof prev === 'undefined'){
      prev = fn(this[i],this[i+1],i+1,this);
    }else{
      prev = fn(prev,this[i],i,this);
    }
  }
  return prev;
}
// reduce实现 56/3
let arr = [{ count: 1, price: 30 }, { count: 2, price: 3 }, { count: 4, price: 5 }];
let result = arr.myReduce((prev, next, currentIndex, array) => {
  if (currentIndex === array.length-1){ // 取到最后一项 求平均数
    return (prev + next.count * next.price) / array.length
  }
  return prev + next.count * next.price;
}, 0); //0不会占据数组的长度
console.log(result);

// -------------------------

// map 映射 返回的新的数组
let arr = [1,2,3,4].map((item,index)=>{
  return `<li>${item * 2}</li>`
});
console.log(arr);

// filter 返回的新的数组
let arr = [1, 2, 3, 4].filter(item=>{
  return item>3
})
console.log(arr);

// some/every some找到的是true every找的是false
let flag = [1, 2, 3, 4].every(item => {
  return item === 3
})
console.log(flag);

// find找 找到后停止 找不到返回undefined
let obj = [1,2,3,4,3].find((item,index)=>{
  return item===1000
});
console.log(obj);
// some可以写条件  includes没有条件
console.log([1, 2, 33].includes(3)); // es7


// 对象
let obj1 = {name:'zfpx'};
let obj2 = {age:9};
let obj3 = {...obj1,...obj2}
// es5
let obj3 = Object.assign(obj1,obj2); // 属于浅拷贝

let obj1 = {name:'zfpx'}
let obj2 = {age:9}
// obj2.__proto__ = obj1;
Object.setPrototypeOf(obj2,obj1);
console.log(obj2)
console.log(obj2.name);

// 原型链 class的实现
// promise的用法
// generator

