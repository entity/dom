
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

  // methods

  dom.moveTo = function (pos) {
    css(this.el, {
      left: Math.round(pos.left)
    , top: Math.round(pos.top)
    })
  }

  dom.resize = function (size) {
    css(this.el, {
      width: size.width
    , height: size.height
    })
  }

  dom.setClass = function (className) {
    this.el.className = 'entity entity-dom'
    if (className) this.el.classList.add(className)
  }

  return dom
}
