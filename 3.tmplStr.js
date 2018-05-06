let name = 'zfpx';
let age = 9;

let str = '(\''+name+'\')'+'今年('+age+')岁了';
console.log(str);
// ------------------------
let name = 'zfpx';
let age = 9;
let str  = `('${name}')今年(${age})岁了`
console.log(str);

// 模拟一个模板字符串的实现
let name = 'zfpx';
let age = 9;
let str = '(\'${name}\')今年(${age})岁了'
str = str.replace(/\$\{([^}]*)\}/g,function () {
    return eval(arguments[1])
});
console.log(str);

// 带标签的模板字符串 (自定义模板规则)
let name = 'zfpx';
let age = 9;
function fn(strings) {
  let args = Array.prototype.slice.call(arguments,1);
  let str = '';
  for(let i = 0;i<args.length;i++){
    str += (strings[i]+"('"+args[i]+"')");
  }
  str += strings[strings.length-1]
  return str;
}
let str = fn`hello,${name}今年${age}岁了`;
console.log(str);

// 模板字符串 可以换行
let [name,age] = ['珠峰',9];
function pre(value) {
  return '$'+value
}
let ul = `<ul>
  <li>${pre(name)}</li>
  <li>${pre(age)}</li>
</ul>`
console.log(ul);
// 以后尽量用模板字符串

