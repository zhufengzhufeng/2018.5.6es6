// 需求 1 读取一个文件 1.txt 文件中存的是2.txt 再去读取2.txt 读取2.txt的结果 我很帅
let fs = require('fs');
// err代表的是错误 data就是读取的数据

// 1.第二次请求是基于第一次的
function read(path){
  return new Promise((resolve,reject)=>{
    fs.readFile(path, 'utf8', function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  })
}
read('100.txt').then((data)=>{
})
.then(data=>{
  console.log('success'+data);
}).catch(err=>{
  console.log('err', 2222);
}).then(data=>{
  console.log('ok')
})

// Promise.resolve Promise.reject
// read('1.txt').then(data=>{
//   return data;
// }).then(data=>{
//   return Promise.reject(data)
// }).then(data=>{
//   console.log(data);
// },err=>{
//   console.log('err',err);
// })


fs.readFile('./1.txt','utf8',function (err,data) {
  console.log(data);
})// 2s

fs.readFile('./2.txt', 'utf8', function (err, data) {
  console.log(data);
})// 4s
// all方法会再次返回一个Promise实例,如果数组中的promise有一个失败了，这个promise就失败了，如果都成功了才算成功
Promise.all([read('1.txt'),read('2.txt')]).then(([r1,r2])=>{
  console.log(r1,r2);
})
// 赛跑 谁的快就用谁的结果
Promise.race([read('1.txt'), read('2.txt')]).then(data => {
  console.log('data',data);
});

// 1.如果第一个promise执行完的结果 返回的依旧是一个Promise,就可以实现链式调用如果promise返回了成功就会调用下次then的成功函数,如果返回失败就会执行失败的函数
// 2.promise第一次then无论返回的是什么(不是promise)都会作为下一次then的成功态
// 3.执行时发生了错误也会走到失败态
// 4.catch可以捕获promise中的错误，如果相邻的捕获了就不会走到catch中了


// fs.readFile('1.txt','utf8',function (err,data) {
//   if(err) return console.log(err);
//   fs.readFile(data,'utf8',function (err,data) {
//     if (err) return console.log(err);
//     console.log(data);
//   })
// })
