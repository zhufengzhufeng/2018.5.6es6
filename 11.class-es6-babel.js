function _classCallCheck(instance,constructor) {
  if (!(instance instanceof constructor)){
    throw new Error('without new')
  }
}
function defineProperties(target, proto) {
    for(let i = 0;i<proto.length;i++){
      Object.defineProperty(target, proto[i].key,{
        value:proto[i].value,
        configurable:true,
        enumerable:true
      });
    }
}
function _createClass(constructor,proto,staticProto) {
  if(proto.length){
    defineProperties(constructor.prototype, proto)
  }
  if (staticProto.length){
    defineProperties(constructor, staticProto)
  }
}
let Parent = function () {
    function P() {
      _classCallCheck();
      this.parent = 'parent'
    }
    _createClass(P,[
      {
        key:'smoking',
        value:function () {
          console.log('吸烟')
        }
      }
    ])
    return P
}();
// 继承公有和静态方法
function _inherits(subClass,superClass) {
  subClass.__proto__  = superClass;
  subClass.prototype = Object.create(superClass.prototype,{constructor:{value:subClass}})
}
let Child = function (Parent) {
  _inherits(Child,Parent)
  function Child(a) { // 1.类有调用检测
    _classCallCheck(this,Child);
    Parent.call(this);
    this.name = a;
  }
  // 数组中的参数叫属性描述器
  _createClass(Child,[
    {
      key:'eat',
      value:function () {
        console.log('吃')
      }
    },{
      key:'drink',
      value:function () {
        console.log('喝水')
      }
    }
  ],[
    {
      key:'a',
      value:function () {
        return 100;
      }
    }
  ])
  return Child;
}(Parent)
let c = new Child('珠峰培训');
console.log(Child.a());


