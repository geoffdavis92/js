/**
 * Class Registration - registers given custom HTML tags
 * @param  {String}	[name] Name of the tag to register
 * @param  {Object} [styleObject] JS(ON) object of styles to add on to each instance
 * @param  {Object} [proto=Object.create(HTMLElement.prototype)] Element prototype to use
 * @return {Null}
 */
class Registration {
    constructor(name, styleObject, proto = Object.create(HTMLElement.prototype)) {
        this._name = name
        this._proto = proto
        this._styles = styleObject
        this.init = this.registerElement(this._name, this._proto)
    }
    /**
     * @param {String} [text] Inner text of element
     * @param {Object} [attributes] JS(ON) object of attributes to add
     * @param {String} [target] Target element container
     * @param {Object} [ctx=this] Context, defaults to class reference
     * @return {function} Class `defineStyle` method
     */
    addEl(text, attributes, target = 'body', ctx = this) {
        let _text = document.createTextNode(text)
        let _el = document.createElement(ctx._name)
        let _target = document.querySelector(target)
        for (let attr in attributes) {
            _el.setAttribute(attr, attributes(attr))
        }
        _el.appendChild(_text)
        _target.appendChild(_el)
        return ctx.defineStyle()
    }
    /**
     * @param {String} [name] name of the method to add
     * @param {Function} [fn] code to execute on method call
     * @param {Object} [proto] Prototype to use, defaults to Class's default-called prototype
     * @param {Function} [reg] Registration function, defaults to this.RegisterElement
     * @return {Object} Class reference
     */
    addMethod(name, fn, proto = this._proto, reg = this.registerElement) {
        proto[name] = fn
        return this
    }
    addProp(name, prop, proto = this._proto, reg = this.registerElement) {
        proto[name] = prop
        return this
    }
    defineStyle(styleObject = this._styles, proto = this._proto, ctx = this) {
        let allEl = document.querySelectorAll(ctx._name)
        for (let i = 0; i < allEl.length; i++) {
            for (let key in styleObject) {
                allEl[i].style[key] = styleObject[key]
            }
        }
        return this
    }
    registerElement(n, p) {
        return document.registerElement(n, {
            prototype: Object.create(p)
        })
    }
}
const register = (name, proto) => {
    return new Registration(name, proto)
}
