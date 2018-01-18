/**
 *  Created by daiwenjuan on 2018/1/18 下午12:09.
 */
// function createFunctions() {
//   var result = new Array()
//   for (var i = 0; i < 10; i++) {
//     result[i] = function (num) {
//       return function () {
//         return num
//       }
//     }
//   }
//   return result
// }
//
// console.log(createFunctions()[1](1)())
//
// function outputNumbers(count) {
//   for (var i = 0; i < count; i++) {
//     console.log(i)
//   }
//   console.log('=============')
//   var i //重新声明也没用
//   console.log(i) //1在循环外边也能访问到
// }
// outputNumbers(1)
// function outputNumbers1(count) {
//   (function () {
//     for (var i = 0; i < count; i++) {
//       console.log(i)
//     }
//   })()
//   console.log('=============')
//   // console.log(i) //访问不到
// }
// outputNumbers1(1)
//
// //模拟私有变量
// function MyObject() {
//   var privateVar = 10
//
//   function privateFunction() {
//     return false
//   }
//
//   this.publicMethod = function () {
//     privateVar++
//     return privateFunction()
//   }
// }
//
// var myObj = new MyObject()
// myObj.publicMethod()
//
// function Person(name) {
//   this.getName = function () {
//     return name
//   }
//   this.setName = function (value) {
//     name = value
//   }
// }
// var person = new Person('xiaoming')
// console.log(person.getName())
// person.setName('xiaowang')
// console.log(person.getName())
//
// var person1 = new Person('aa')
// console.log(person1.getName())
//
// //静态私有变量
// console.log('========静态私有变量=========')
// (function () {
//   var privateVar = 10
//
//   function privateFunction() {
//     return false
//   }
//
//   MyObject = function () {
//
//   }
//   MyObject.prototype.publicMethod = function () {
//     privateVar++
//     return privateFunction()
//   }
// })()

// (function () {
//   var name = ''
//
//   Person = function (value) {
//   }
//   Person.prototype.getName = function () {
//     return name
//   }
//   Person.prototype.setName = function (value) {
//     name = value
//   }
// })()
// var pp = new Person('bb')
// debugger
// console.log(pp.getName())

//=========模块模式=============
var singleton = function () {
  var privateVarible = 10

  function privateFunction() {
    return false
  }

  return {
    publicProperty: true,
    publicMethod: function () {
      privateVarible++
      return privateFunction()
    }
  }
}()

