/**
 *  Created by daiwenjuan on 2018/1/13 10:15.
 */
function positionMessage () {
  if (!document.getElementById) return false
  var elem = document.getElementById('message')
  if (!elem) return false
  elem.style.position = 'absolute'
  elem.style.left = '50px'
  elem.style.top = '100px'
  moveElement('message', 200, 100, 10)

  var elem2 = document.getElementById('message2')
  if (!elem2) return false
  elem2.style.position = 'absolute'
  elem2.style.left = '50px'
  elem2.style.top = '50px'
  moveElement('message2', 125, 75, 20)
}

addLoadEvent(positionMessage)