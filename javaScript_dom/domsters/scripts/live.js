/**
 *  Created by daiwenjuan on 2018/1/16 下午1:38.
 */

function stripeTables() {
  if (!document.getElementsByTagName)return false
  var tables = document.getElementsByTagName('table')
  for (var i = 0; i < tables.length; i++) {
    var odd = false
    var rows = tables[i].getElementsByTagName('tr')
    for (var j = 0; j < rows.length; j++) {
      if (odd) {
        addClass(rows[j], 'odd')
        odd = false
      } else {
        odd = true
      }
    }
  }
}

function highlightRows() {
  if (!document.getElementsByName) return false
  var rows = document.getElementsByTagName('tr')
  for (var i = 0; i < rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function () {
      addClass(this, 'hightlight')
    }
    rows[i].onmouseout = function () {
      this.className = this.oldClassName
    }
  }
}
function displayAbbreviations() {
  var abbreviations = document.getElementsByTagName('abbr')
  if (abbreviations.length < 1) return false
  var defs = new Array()
  for (var i = 0; i < abbreviations.length; i++) {
    var current_abbr = abbreviations[i]
    if (current_abbr.childNodes.length < 1) continue
    var definition = current_abbr.getAttribute('title')
    var key = current_abbr.lastChild.nodeValue
    defs[key] = definition
  }

  var dlist = document.createElement('dl')
  for (key in defs) {
    var definitionStr = defs[key]
    var dtitle = document.createElement('dt')
    var dtitle_text = document.createTextNode(key)
    dtitle.appendChild(dtitle_text)
    var ddesc = document.createElement('dd')
    var ddesc_text = document.createTextNode(definitionStr)
    ddesc.appendChild(ddesc_text)
    dlist.appendChild(dtitle)
    dlist.appendChild(ddesc)
  }
  if (dlist.childNodes.length < 1) return false
  var header = document.createElement('h2')
  var header_text = document.createTextNode('Abbreviations')
  header.appendChild(header_text)
  document.body.appendChild(header)
  document.body.appendChild(dlist)
}
addLoadEvent(stripeTables)
addLoadEvent(highlightRows)
addLoadEvent(displayAbbreviations)