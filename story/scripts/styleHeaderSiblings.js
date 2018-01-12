/**
 *  Created by daiwenjuan on 2018/1/12 下午5:44.
 */
function styleHeaderSiblings() {
  var headers = document.getElementsByTagName('h1')
  for (var i = 0; i < headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling)
    elem.style.fontWeight = 'bold'
    elem.style.fontSize = '1.2em'
  }
}
function getNextElement(node) {
  if (node.nodeType === 1) {
    return node
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling)
  }
  return null
}

addLoadEvent(styleHeaderSiblings)