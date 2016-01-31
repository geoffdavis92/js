# Registration

Class Registration - registers given custom HTML tags

**Parameters**

-   `name` **[String]** Name of the tag to register
-   `styleObject` **[Object]** JS(ON) object of styles to add on to each instance
-   `proto` **[Object]** Element prototype to use (optional, default `Object.create(HTMLElement.prototype)`)

Returns **Null** 

## addEl

**Parameters**

-   `text` **[String]** Inner text of element
-   `attributes` **[Object]** JS(ON) object of attributes to add
-   `target` **[String]** Target element container
-   `ctx` **[Object]** Context, defaults to class reference (optional, default `this`)

Returns **function** Class `defineStyle` method

## addMethod

**Parameters**

-   `name` **[String]** name of the method to add
-   `fn` **[Function]** code to execute on method call
-   `proto` **[Object]** Prototype to use, defaults to Class's default-called prototype
-   `reg` **[Function]** Registration function, defaults to this.RegisterElement

Returns **Object** Class reference
