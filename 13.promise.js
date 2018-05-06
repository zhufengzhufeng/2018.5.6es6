// 什么叫promise 解决什么问题的
// 承诺 买  不买  装傻
// 典型的三个状态 resolved(解决) rejected(拒绝) pending(等待)

// 1.Promise实现有多种 Q blueBird ....
// promise种放了一个函数 函数executor 执行器
// resolve和reject都是函数  调用后可以让状态进行改变
// promise解决的问题有 1) 回调地狱 2)解决 并发异步，再同一时刻内获取并发的结果 3) 链式调用 （jquery）

let p = new Promise(function (resolve,reject) {
    console.log(1);
    reject(20); // 默认只会执行第一个方法 后面的会被忽略掉
    resolve(20);
});
p.then(function(data){
  console.log('success',data)
},function (err) {
  console.log('error',err)
});

// 抛硬币 正：买包  反:不买
// function flipCoin(buy, noBuy){
//   setTimeout(()=>{
//     if(Math.random()>0.5){
//       buy();
//     }else{
//       noBuy();
//     }
//   },2000)
// }
// let buy =()=>{console.log('买')};
// let noBuy = () =>{console.log('不买')};
// flipCoin(buy,noBuy)

function flipCoin() {
  return new Promise(function (resolve,reject) {
    setTimeout(()=>{
      if(Math.random()>0.5){
        resolve();
      }else{
        reject();
      }
    })
  })
}
flipCoin().then((data)=> {
    console.log('买')
},(err)=>{
  console.log('不买')
})

// 1.所有的Promise的executor都是同步执行的
// 2.每个promise上都有一个then方法，then方法种有两个参数,成功的函数，失败的函数