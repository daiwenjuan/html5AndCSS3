/**
 *  Created by daiwenjuan on 2018/1/19 上午10:48.
 */
function test1() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    context.fillStyle = '#ff0000'
    context.fillRect(10, 10, 50, 50)

    context.fillStyle = 'rgba(0,0,255,0.5)'
    context.fillRect(30, 30, 50, 50)

    context.clearRect(40, 40, 10, 10)
  }
}
function test2() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    context.strokeStyle = '#ff0000'
    context.strokeRect(10, 10, 50, 50)

    context.strokeStyle = 'rgba(0,0,255,0.5)'
    context.strokeRect(30, 30, 50, 50)
  }
}
function test3() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    context.beginPath()
    context.arc(100, 100, 99, 0, 2 * Math.PI, false)

    context.moveTo(194, 100) //将绘制游标移动到某个位置
    context.arc(100, 100, 94, 0, 2 * Math.PI, false)

    context.moveTo(100, 100)
    context.lineTo(100, 25)
    context.moveTo(100, 100)
    context.lineTo(35, 100)
    if (context.isPointInPath(100, 100)) {
      // alert('在（100，100）这个位置上')
    }
    context.font = 'bold 14px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText('12', 100, 20)
    context.stroke()

  }
}

function test4() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    var fontSize = 100
    context.font = fontSize + 'px Arial'
    while (context.measureText('Hello world!').width > 140) {
      fontSize--
      context.font = fontSize + 'px Arial'
    }
    context.fillText('Hello world!', 10, 10)
  }
}

function test5() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    context.beginPath()
    context.arc(100, 100, 99, 0, 2 * Math.PI, false)

    context.moveTo(194, 100) //将绘制游标移动到某个位置
    context.arc(100, 100, 94, 0, 2 * Math.PI, false)

    context.translate(100, 100)
    context.rotate(1)

    context.moveTo(0, 0)
    context.lineTo(0, -85)

    context.moveTo(0, 0)
    context.lineTo(-65, 0)
    if (context.isPointInPath(100, 100)) {
      // alert('在（100，100）这个位置上')
    }
    context.stroke()

  }
}
function test6() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    context.fillStyle = '#ff0000'
    context.save()

    context.fillStyle = '#00ff00'
    context.translate(100, 100)
    context.save()

    context.fillStyle = '#0000ff'
    context.fillRect(0, 0, 100, 200)

    context.restore()
    context.fillRect(10, 10, 100, 200)

    context.restore()

    context.fillRect(0, 0, 100, 200)
  }
}
function test7() {
  var drawing = document.getElementById('drawing')
  if (drawing.getContext) {
    var context = drawing.getContext('2d')
    // context.shadowOffsetX = 5
    // context.shadowOffsetY = 5
    // context.shadowBlur = 4
    // context.shadowColor = 'rgba(0,0,0,0.5)'
    //
    // context.fillStyle = '#ff0000'
    // context.fillRect(10, 10, 50, 50)
    //
    // context.fillStyle = 'rgba(0,0,255,1)'
    // context.fillRect(30, 30, 50, 50)

    // var gradient = context.createLinearGradient(30, 30, 70, 70)
    var gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30)
    gradient.addColorStop(0, 'white')
    gradient.addColorStop(1, 'black')
    context.fillStyle = '#ff0000'
    context.fillRect(10, 10, 50, 50)
    context.fillStyle = gradient
    context.fillRect(30, 30, 50, 50)
  }
}
addLoadEvent(test7)