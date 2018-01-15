/**
 *  Created by daiwenjuan on 2018/1/15 下午5:27.
 */
function prepareSlideshow() {
  if (!document.getElementsByTagName) return false
  if (!document.getElementById) return false
  var intro = document.getElementById('intro')
  if (!intro) return false
  var slideshow = document.createElement('div')
  slideshow.setAttribute('id', 'slideshow')
  var preview = document.createElement('img')
  preview.setAttribute('src', 'images/slideshow.gif')
  preview.setAttribute('alt', 'a glimpse of what awaits you')
  preview.setAttribute('id', 'preview')
  preview.style.position = 'absolute'
  preview.style.left = '0px'
  preview.style.top = '0px'
  slideshow.appendChild(preview)

  var frame = document.createElement('img')
  frame.setAttribute('src', 'images/frame.gif')
  frame.setAttribute('alt', '')
  frame.setAttribute('id', 'frame')
  slideshow.appendChild(frame)

  insertAfter(slideshow, intro)

  var links = intro.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
      var destination = this.getAttribute('href')
      if (destination.indexOf('index.html') != -1) {
        moveElement('preview', 0, 0, 5)
      }
      if (destination.indexOf('about.html') != -1) {
        moveElement('preview', -150, 0, 5)
      }
      if (destination.indexOf('photos.html') != -1) {
        moveElement('preview', -300, 0, 5)
      }
      if (destination.indexOf('live.html') != -1) {
        moveElement('preview', -450, 0, 5)
      }
      if (destination.indexOf('contact.html') != -1) {
        moveElement('preview', -600, 0, 5)
      }
    }
  }

}

function moveElement(elemID, final_x, final_y, interval) {
  if (!document.getElementById) return false
  var elem = document.getElementById(elemID)
  if (!elem) return
  if (elem.movement) {
    clearTimeout(elem.movement)
  }
  if (!elem.style.left) {
    elem.style.left = '0px'
  }

  if (!elem.style.top) {
    elem.style.top = '0px'
  }
  var xpos = parseInt(elem.style.left)
  var ypos = parseInt(elem.style.top)
  if (xpos == final_x && ypos == final_y) return true
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos) / 10)
    xpos = xpos + dist
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x) / 10)
    xpos = xpos - dist
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos) / 10)
    ypos = ypos + dist

  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y) / 10)
    ypos = ypos - dist
  }
  elem.style.left = xpos + 'px'
  elem.style.top = ypos + 'px'
  var repeat = 'moveElement(\'' + elemID + '\',\'' + final_x + '\',\'' + final_y + '\',\'' + interval + '\')'
  elem.movement = setTimeout(repeat, interval)
}

addLoadEvent(prepareSlideshow)