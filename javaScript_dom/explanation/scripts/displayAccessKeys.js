/**
 *  Created by daiwenjuan on 2018/1/12 下午4:22.
 */
function displayAccessKeys() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return fasel
  var links = document.getElementsByTagName('a')
  var akeys = new Array()
  for (var i = 0; i < links.length; i++) {
    var current_line = links[i]
    if (!current_line.getAttribute('accesskey')) continue
    var key = current_line.getAttribute('accesskey')
    akeys[key] = current_line.lastChild.nodeValue
  }
  var list = document.createElement('ul')
  for (key in akeys) {
    var text = akeys[key]
    var str = key + ':' + text
    var item = document.createElement('li')
    var item_text = document.createTextNode(str)
    item.appendChild(item_text)
    list.appendChild(item)
  }
  var header = document.createElement('h3')
  var header_text = document.createTextNode('Accesskeys')
  header.appendChild(header_text)
  document.body.appendChild(header)
  document.body.appendChild(list)
}
addLoadEvent(displayAccessKeys)