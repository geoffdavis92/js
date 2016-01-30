const register = (name,proto) => { class Registration {
	constructor(name,styleObject,proto=Object.create(HTMLElement.prototype)) {
		this._name = name
		this._proto = proto
		this._styles = styleObject
		this.init = this.registerElement(this._name,this._proto)
	}
	addEl(text,attributes,target='body',ctx=this) {
		var _text = document.createTextNode(text)
		var _el = document.createElement(ctx._name)
		var _target = document.querySelector(target)
		for(let attr in attributes) {
			_el.setAttribute(attr,attributes(attr))
		}
		_el.appendChild(_text)
		_target.appendChild(_el)
		return ctx.defineStyle()
	}
	addMethod(name, fn,proto=this._proto,reg=this.registerElement) {
		return proto[name] = fn
	}
	addProp(name, prop,proto=this._proto,reg=this.registerElement) {
		return proto[name] = prop
		// console.log(Object.defineProperty())
		// return Object.defineProperty(proto,name,{[name]:prop})
	}
	defineStyle(styleObject=this._styles,proto=this._proto,ctx=this) {
		var allEl = document.querySelectorAll(ctx._name)
		for (let i=0;i<allEl.length;i++) {
			for(let key in styleObject) {
				allEl[i].style[key] = styleObject[key]
			}
		}
		return this
	}
	registerElement(n,p) {
		return document.registerElement(n, {
			prototype: Object.create(p)
		})
	}
}
return new Registration(name,proto)
}