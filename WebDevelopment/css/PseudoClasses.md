### Pseudo Classes
- target elemtnts based on **state** or **position**.
- examples:
1. **:hover** -> for styling mouse hover
2. **:nth-child(2)** -> to target the second child.
3. **:focus** -> to focus something

---

### Pseudo Elements
- Allows us to style **parts of an element's content**.
- examples:
1. **::before** -> to add content before an element.
2. **::after** -> to add content after an element.

---

## Video Notes

Here are complete notes based on the tutorial covering CSS Pseudo-Classes:

📌 Overview: What is a Pseudo-Class?
Definition: A pseudo-class is a keyword added to a CSS selector that specifies a special state of an element.

Purpose: They allow you to modify the behavior and styling of elements when they interact with the user or enter specific structural states (e.g., hovering, clicking, or nth position in a list).

1. Link and Interaction Pseudo-Classes
Links and buttons change appearance dynamically based on user interactions:

:link

Styles an unvisited hyperlink.

Example: Setting anchor text to light blue.

:hover

Triggers when the user places their cursor over an element.

Example: Changing text color or slightly scaling the element (e.g., font-size: 1.1em) to create a zooming effect.

:active

Triggers the exact moment an element is being selected or clicked and held down.

Example: Changing font size and color when the mouse is held down on a link.

:visited

Styles a link that the user has already visited (by default, browsers make this purple).

2. Structural & Negation Pseudo-Classes
:not() (Negation Pseudo-Class)

Selects elements that do not match a specific state or selector.

Example: Setting all list items not currently being hovered over to a gray color.

:nth-child()

Selects elements based on their position in a parent element's list.

Values & Formulas:

Specific numbers (e.g., 1, 3, 9) target an exact child element.

Keywords like odd or even target alternating rows.

Expressions like 3n select every third element.

Offsets (e.g., 3n + 1 or 3n + 2) can adjust where the pattern begins, making it dynamic and powerful when paired with JavaScript.

3. Practical Example: Drop-down/Hidden Element Effect
Pseudo-classes can also control visibility states, which is foundational for building components like drop-down menus:

Initial State: Hide an inner element (like a paragraph inside a container div) using display: none.

Hover State Interaction: Target the child element when the parent container is hovered over (div:hover p) and switch its display property to display: block to reveal it.