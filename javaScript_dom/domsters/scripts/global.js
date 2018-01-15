/**
 *  Created by daiwenjuan on 2018/1/15 下午1:40.
 */
function highlightPage() {
  if (!document.getElementsByTagName) return false
  if (!document.getElementById) return false
  var nav = document.getElementById('navigation')
  if (!nav) return false
  var links = nav.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    var linkUrl = links[i].getAttribute('href')
    var currenturl = window.location.href
    if (currenturl.indexOf(linkUrl) != -1) {
      links[i].className = 'here'
      var linktext = links[i].lastChild.nodeValue.toLowerCase()
      document.body.setAttribute('id', linktext)
    }
  }

}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}

function addClass(element, value) {
  if (!element.className) {
    element.className = value
  } else {
    var newClassName = element.className
    newClassName += ' '
    newClassName += value
    element.className = newClassName
  }
}

function addLoadEvent(func) {
  var oldonLoad = window.onload
  if (typeof window.onload !== 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      oldonLoad()
      func()
    }
  }
}

addLoadEvent(highlightPage)
