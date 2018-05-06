// 实现解构 结构相同可以将对应的内容拿出来

let arr = ['珠峰',9];
let name = arr[0];
let age = arr[1];

// 是具有声明功能
let [,age] = ['珠峰', 9];
console.log(age);

// 对象的解构,解构可以重新赋值其他名字
// :是重命名  =是赋默认值
let { default:d,address="珠峰"} = {name:'zfpx',age:9,default:'hello'};
console.log(address);

let [,,{hobby:[val,[a]]}] = [
  {name:'zfpx'},
  {age:9},
  {
    hobby: ['睡觉',[1]]
  }
]
console.log(val,a);

function ajax({data,url,method="get"}) {
  console.log(data, url,method)
}
ajax({
  data:'a=b',
  url:'/test'
});
