/**
 *  Created by daiwenjuan on 2018/1/11 下午2:50.
 */
function showPic(whichpic) {
  var source = whichpic.getAttribute('href')
  var placeholder = document.getElementById('placeholder')
  placeholder.setAttribute('src', source)
  var text = whichpic.getAttribute('title')
  var description = document.getElementById('description')
  description.firstChild.nodeValue = text
}
