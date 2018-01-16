/**
 *  Created by daiwenjuan on 2018/1/16 上午11:25.
 */
function prepareInternalnav() {
  if (!document.getElementsByTagName) return false
  if (!document.getElementById) return false
  var nav = document.getElementById('internamnav')
  if (!nav) return false
  var links = nav.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    var sectionId = links[i].getAttribute('href').split('#')[1]
    if (!document.getElementById(sectionId)) continue
    document.getElementById(sectionId).style.display = 'none'
    links[i].destination = sectionId
    links[i].onclick = function () {
      showSection(this.destination)
      return false
    }
  }
}

function showSection(id) {
  var divs = document.getElementsByTagName('div')
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].className.indexOf('section') == -1) continue
    if (divs[i].getAttribute('id') != id) {
      divs[i].style.display = 'none'
    } else {
      divs[i].style.display = 'block'
    }
  }
}
addLoadEvent(prepareInternalnav)