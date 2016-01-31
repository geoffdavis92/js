# Registration

[registration/register.js:8-62](https://github.com/geoffdavis92/js/blob/7f27006d77912e051fe439ea12d24f0a37848801/registration/register.js#L8-L62 "Source code on GitHub")

Class Registration - registers given custom HTML tags

**Parameters**

-   `name` **[String]** Name of the tag to register
-   `styleObject` **[Object]** JS(ON) object of styles to add on to each instance
-   `proto` **[Object]** Element prototype to use (optional, default `Object.create(HTMLElement.prototype)`)

Returns **Null** 

## addEl

[registration/register.js:22-32](https://github.com/geoffdavis92/js/blob/7f27006d77912e051fe439ea12d24f0a37848801/registration/register.js#L22-L32 "Source code on GitHub")

**Parameters**

-   `text` **[String]** Inner text of element
-   `attributes` **[Object]** JS(ON) object of attributes to add
-   `target` **[String]** Target element container
-   `ctx` **[Object]** Context, defaults to class reference (optional, default `this`)

Returns **function** Class `defineStyle` method

## addMethod

[registration/register.js:40-43](https://github.com/geoffdavis92/js/blob/7f27006d77912e051fe439ea12d24f0a37848801/registration/register.js#L40-L43 "Source code on GitHub")

**Parameters**

-   `name` **[String]** name of the method to add
-   `fn` **[Function]** code to execute on method call
-   `proto` **[Object]** Prototype to use, defaults to Class's default-called prototype
-   `reg` **[Function]** Registration function, defaults to this.RegisterElement

Returns **Object** Class reference
