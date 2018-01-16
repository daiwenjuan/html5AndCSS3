/**
 *  Created by daiwenjuan on 2018/1/16 下午12:01.
 */
function preparePlaceholder() {
  if (!document.createElement) return false
  if (!document.createTextNode) return false
  if (!document.getElementsByName) return false
  if (!document.getElementById) return false
  var gallery = document.getElementById('imagegallery')
  if (!gallery) return false
  var placeholder = document.createElement('img')
  placeholder.setAttribute('id', 'placeholder')
  placeholder.setAttribute('src', 'images/placeholder.gif')
  placeholder.setAttribute('alt', 'my image gallery')

  var description = document.createElement('p')
  description.setAttribute('id', 'description')
  var desctext = document.createTextNode('Choose an image')
  description.appendChild(desctext)
  insertAfter(description, gallery)
  insertAfter(placeholder, description)
}
function showPic(whichpic) {
  if (!document.getElementById('placeholder')) return true
  var source = whichpic.getAttribute('href')
  var placeholder = document.getElementById('placeholder')
  placeholder.setAttribute('src', source)
  if (!document.getElementById('description'))return false
  var text = ''
  if (whichpic.getAttribute('title')) {
    text = whichpic.getAttribute('title')
  }
  var description = document.getElementById('description')
  if (description.firstChild.nodeType === 3) {
    description.firstChild.nodeValue = text
  }
  return false
}
function prepareGallery() {
  if (!document.getElementsByName) return false
  if (!document.getElementById) return false
  var gallery = document.getElementById('imagegallery')
  if (!gallery) return false
  var links = gallery.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this)
    }
  }

}
addLoadEvent(preparePlaceholder)
addLoadEvent(prepareGallery)