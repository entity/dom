
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

  // listeners

  dom.init = function (e) {
    if (e.id) e.el.attributes.id = e.id
    if (e.class) e.setClass(e.class)
    if (e.classList) {
      e.setClass()
      e.classList.forEach(function (c) {
        e.el.classList.add(c)
      })
    }
    e.resize(e.mesh.size)
  }

  dom.start = function (e) {
    parentEl.appendChild(e.el)
  }

  dom.render = function (e) {
    e.moveTo(v(e.mesh.pos).sub(e.offset))
  }

  dom.stop = function (e) {
    parentEl.removeChild(e.el)
  }

  return dom
}
