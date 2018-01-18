/**
 *  Created by daiwenjuan on 2018/1/12 下午1:37.
 */
window.onload = function () {
  var emphasis = document.createElement('em')
  var emtxt = document.createTextNode('my')
  emphasis.appendChild(emtxt)
  var para = document.createElement('p')
  var txt = document.createTextNode('This is')
  var txt1 = document.createTextNode('content')
  para.appendChild(txt)
  para.appendChild(emphasis)
  para.appendChild(txt1)
  var testdiv = document.getElementById('testdiv')
  testdiv.appendChild(para)
  debugger
  var aa = document.getElementById('aa')
  var bb = aa.firstChild
}