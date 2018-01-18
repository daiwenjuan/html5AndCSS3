/**
 *  Created by daiwenjuan on 2018/1/11 下午2:50.
 */
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
function preparePlaceholder() {
  var img = document.createElement('img')
  img.setAttribute('id', 'placeholder')
  img.setAttribute('src', 'images/placeholder.jpeg')
  img.setAttribute('alt', 'my image gallery')
  var description = document.createElement('p')
  description.setAttribute('id', 'description')
  var text = document.createTextNode('Choose an image.')
  description.appendChild(text)
  var gallery = document.getElementById('imagegallery')
  insertAfter(img, gallery)
  insertAfter(description, img)
}

function showPic(whichpic) {
  var placeholder = document.getElementById('placeholder')
  if (!placeholder) return true
  var source = whichpic.getAttribute('href')
  placeholder.setAttribute('src', source)
  var description = document.getElementById('description')
  if (!description)return false
  var text = whichpic.getAttribute('title')
  description.firstChild.nodeValue = text ? text : ''
  return false
}
function prepareGallery() {
  if (!document.getElementsByTagName || !document.getElementById)return false
  var gallery = document.getElementById('imagegallery')
  if (!gallery)return false
  var links = gallery.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this)
    }
  }
}

function test() {
  var text = 'cat,bat,sat,fat'
  var result = text.replace('at', 'ond')
  alert(result)
}
addLoadEvent(test)
addLoadEvent(preparePlaceholder)
addLoadEvent(prepareGallery)

