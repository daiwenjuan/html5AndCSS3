/**
 *  Created by daiwenjuan on 2018/1/12 下午3:46.
 */
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