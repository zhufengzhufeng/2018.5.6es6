let Promise = require('./Promise')
let p =new Promise((resolve,reject)=>{
  reject(1)
})
p.then(function (data) {
  console.log(data);
},function (err) {
  console.log(err);
});