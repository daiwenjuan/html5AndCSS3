/**
 *  Created by daiwenjuan on 2018/1/17 下午4:53.
 */
//面向对象章节
// var person = {}
// Object.defineProperty(person, 'name', {
//   writable: false,
//   value: 'xiaoming'
// })
// console.log(person.name)  //xiaoming
// person.name = '小红'
// console.log(person.name)//xiaoming

var person1 = {}
Object.defineProperty(person1, 'name', {
  configurable: false, //一旦设置了就不能再修改了
  value: 'xiaoming'
})
// 会抛出异常
// Object.defineProperty(person1, 'name', {
//   configurable: true,
//   value: 'xiaoming'
// })
console.log(person1.name)  //xiaoming
delete person1.name   //删除不了
console.log(person1.name)//xiaoming
//-----------------------------------------------------
var book = {
  _year: 2004,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (newValue) {
    if (newValue > 2004) {
      this._year = newValue
      this.edition += newValue - 2004
    }
  }
})
book.year = 2005
console.log(book.edition)
var desc = Object.getOwnPropertyDescriptor(book, '_year')
console.log(desc.value)
console.log(desc.configurable)

//==================工厂模式=============================
console.log('==========工厂模式===========')
function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}
var per = createPerson('xiaoming', 22, 'job')
per.sayName()

//==================构造函数模式=============================
console.log('==========构造函数模式===========')
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}
var perNew = new Person('xiaohong', 22, 'job')
perNew.sayName()
console.log(perNew.constructor)
var perNew1 = new Person('xiaohong', 22, 'job')
console.log(perNew1.sayName === perNew.sayName) //false

Person('xiaowang', 22, 'job')  //直接当做普通函数条用，this相当于全局变量global或window
global.sayName()

var o = new Object()
Person.call(o, 'xiaoxiao', 22, 'job')
o.sayName()

//每new一个对象构造函数中的方法就会生成一份新的，占用一份内存
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = sayName
}
function sayName() {
  console.log(this.name)
}

var perNewE = new Person('xiaohong001', 22, 'job')
perNewE.sayName()
var perNewE1 = new Person('xiaohong002', 22, 'job')
perNewE1.sayName()
console.log(perNewE.sayName === perNewE1.sayName) //true

//==================原型模式=============================
console.log('==========原型模式===========')
//prototype 是一个指针 指向一个对象 通过调用构造函数而生成实例的原型对象
// 可以将对象中的一些属性添加到原型中
function Person1() {

}
Person1.prototype.name = '001'
Person1.prototype.age = 12
Person1.prototype.job = 'software'
Person1.prototype.sayName1 = function () {
  console.log(this.name)
}

var p = new Person1()
p.sayName1()
var p1 = new Person1()
p1.sayName1()
console.log(p.sayName1 === p1.sayName1)

//因为Person1的原型指向了 new Person1（）对象
//Person.Prototype也是一个对象
//每个构造函数都有一个属性prototype prototype会自动获取constructor并且prototype的构造函数指向了构造函数，new出来的实例都包含一个内部属性会指向proptotype
console.log(Person1.prototype.isPrototypeOf(p))
console.log(Object.getPrototypeOf(p))
console.log(Person1.prototype)

////==================继承=============================
console.log('==========继承===========')

function SuperType() {
  this.propety = true
}
SuperType.prototype.getSuperValue = function () {
  return this.propety
}
function SubType() {
  this.subProperty = false
}
//父类修改了子类的prototype  new一个实例的原因是保证子类修改不会影响其他类型继承父类
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subProperty
}
var sub = new SubType()
console.log(sub.getSuperValue())
console.log(SuperType.prototype.constructor === SuperType.prototype.constructor)



