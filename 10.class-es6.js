class Parent {
  constructor(){
    this.parent = 'parent';
  }
  static a(){console.log(1000)}
  smoking(){
    console.log('吸烟')
  }
}
class Child extends Parent {
  constructor(a){
    super(); // Parent.call(this);
    this.name = a;
  }
  eat(){
    console.log('吃')
  }
  drink(){
    console.log('喝水')
  }
}
let child = new Child('zfpx');
// 静态方法也会被继承
Child.a()


// Object.defineProperty();

// let a = {name:'zfpx'}
// Object.defineProperty(a,'age',{
//   enumerable:true, // 可枚举,
//   configurable:true, // 可配置
//   writable:false,
//   value:9
// });
// a.age = 100
// console.log(a);