
var css = require('css')
var rect = require('rect')
var v = require('vector')

var domEl = function (el) {
  if (el) return el
  else return document.createElement('div')
}

module.exports = function (parentEl) {
  var dom = {}
  
  dom.el = [domEl]

  dom.render = function (e) {
    var pos = v(e.mesh.pos).sub(e.offset)
    css(e.el, {
      left: Math.round(pos.left)
    , top: Math.round(pos.top)
    })
  }

  dom.init = function (e) {
    if (e.id) e.el.attributes.id = e.id
    if (e.class) e.el.classList.add(e.class)
    var size = e.mesh.size
    css(e.el, {
      width: size.width
    , height: size.height
    })
  }

  dom.start = function (e) {
    parentEl.appendChild(e.el)
  }

  dom.stop = function (e) {
    parentEl.removeChild(e.el)
  }

  return dom
}
