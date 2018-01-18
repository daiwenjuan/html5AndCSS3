/**
 *  Created by daiwenjuan on 2018/1/18 下午2:49.
 */
//window对象
age = 29
global.color = 'red'
function sayAge() {
  console.log(this.age)
}
// console.log(global.age)
// sayAge()
delete  global.age
delete global.color

console.log(global.age)
console.log(global.color)

