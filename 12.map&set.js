let map = new Map();
// key => value
map.set('a',1);
map.set('a',2);
console.log(map);

console.log(map.get('a'));
console.log(map.has('a'));
map.delete('a'); 

let set = new Set();

console.log(set.size);
// 数组去重
let arr = [1,2,3,4,5,6,4,3,2,1]
let set = new Set(arr);
console.log([...set]);
// set和map两种数据解构 不能放重复的内容