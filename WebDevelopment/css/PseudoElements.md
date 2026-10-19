Introduction to CSS Pseudo-Elements
Overview: Pseudo-elements allow you to dynamically insert and style elements entirely via CSS without needing extra markup in your HTML code.

Syntax Update:

Historically represented with a single colon (:before, :after).

Modern CSS3 standards use a double colon (::before, ::after) to clearly distinguish pseudo-elements from pseudo-classes.

Core Concepts of ::before and ::after
Placement within DOM: These pseudo-elements are inserted inside the target element, right before or after the element's actual text/content, rather than outside of it.

Elements without Content: Elements like self-closing tags (e.g., <input />) cannot have pseudo-elements because they cannot contain inner content.

The content Property: A pseudo-element will not render unless the content property is explicitly specified (even if it's just an empty string content: "" or a symbol),.

Limit: You can only have one ::before and one ::after pseudo-element per element.

Practical Use Cases
1. Adding Form Field Indicators (e.g., Required Asterisk)
Instead of adding an asterisk (*) manually in the HTML for required form fields, you can use the ::after pseudo-element:

CSS
.required::after {
    content: "*";
}
2. Creating Dynamic Tooltips Using the attr() Function
You can pull values directly from HTML attributes using the CSS attr() function to display dynamic tooltips on hover:

CSS
[data-tooltip] {
    position: relative;
}

[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: 100%;
    left: 0;
    background-color: lightgrey;
    padding: 5px;
}