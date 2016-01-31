# Registration

[registration/register.js:9-86](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L9-L86 "Source code on GitHub")

**Parameters**

-   `name` **[String]** Name of the tag to register
-   `styleObject` **[Object]** JS(ON) object of styles to add on to each instance
-   `proto` **[Object]** Element prototype to use (optional, default `Object.create(HTMLElement.prototype)`)

Returns **Null** 

## addEl

[registration/register.js:24-34](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L24-L34 "Source code on GitHub")

**Parameters**

-   `text` **[String]** Inner text of element
-   `attributes` **[Object]** JS(ON) object of attributes to add
-   `target` **[String]** Target element container
-   `ctx` **[Object]** Context, defaults to class reference (optional, default `this`)

Returns **function** Class `defineStyle` method

## addMethod

[registration/register.js:43-46](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L43-L46 "Source code on GitHub")

**Parameters**

-   `name` **[String]** name of the method to add
-   `fn` **[Function]** code to execute on method call
-   `proto` **[Object]** Prototype to use, defaults to Class's default-called prototype
-   `reg` **[Function]** Registration function, defaults to this.RegisterElement

Returns **Object** Class reference

## addProp

[registration/register.js:54-57](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L54-L57 "Source code on GitHub")

**Parameters**

-   `name`  
-   `prop`  
-   `proto`   (optional, default `this._proto`)
-   `reg`   (optional, default `this.registerElement`)

## defineStyle

[registration/register.js:65-73](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L65-L73 "Source code on GitHub")

**Parameters**

-   `styleObject`   (optional, default `this._styles`)
-   `proto`   (optional, default `this._proto`)
-   `ctx`   (optional, default `this`)

## registerElement

[registration/register.js:81-85](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L81-L85 "Source code on GitHub")

**Parameters**

-   `n`  
-   `p`  

# register

[registration/register.js:93-95](https://github.com/geoffdavis92/js/blob/cfdf161ef3dbd6615ded8e4beb02da95d86a7792/registration/register.js#L93-L95 "Source code on GitHub")

**Parameters**

-   `name` **[String]** name of your custom element
-   `proto` **[Object]** Proto type object, defaults to HTMLElement.prototype

Returns **Class** instance of Registration class
