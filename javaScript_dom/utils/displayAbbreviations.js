/**
 *  Created by daiwenjuan on 2018/1/12 下午3:24.
 */
function displayCitations() {
  var quotes = document.getElementsByTagName('blockquote')
  for (var i = 0; i < quotes.length; i++) {
    var quote = quotes[i]
    if (!quote.getAttribute('cite')) continue
    var url = quote.getAttribute('cite')
    var quoteChildren = quote.getElementsByTagName('*')
    var elem = quoteChildren[quoteChildren.length - 1]

    var link = document.createElement('a')
    var link_text = document.createTextNode('source')
    link.appendChild(link_text)
    link.setAttribute('href', url)

    var superscript = document.createElement('sup')
    superscript.appendChild(link)
    elem.appendChild(superscript)
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

addLoadEvent(displayAbbreviations)
addLoadEvent(displayCitations)