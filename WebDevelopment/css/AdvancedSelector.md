## Child Selectors

- It directly targets the **child elements**, not the grandchildren.
- The child selector uses the `>` symbol.
- It selects only the elements that are **directly inside the parent element**.

### index.html

```html
<div class="parent">
    <p>Child 1</p>

    <div>
        <p>Grandchild</p>
    </div>
</div>

```css
/* Selects only the direct <p> child of .parent */
.parent > p {
    color: red;
}
```
![Advanced Selectors](../assets/images/advanceSelectors.png)

---

## Descendant Selectors
- It targets **all matching elements inside the parent element**, including children and grandchildren.
- The descendant selector uses a **space (` `)** between selectors.
- It selects elements that exist **anywhere inside the parent element**, regardless of nesting level.

**### index.html**
```html
<div class="parent">
    <p>Child 1</p>
    <div>
        <p>Grandchild</p>
    </div>
</div>
```

```css
/* Selects all <p> elements inside .parent */
.parent p {
    color: red;
}
```

---

## Attribute Selectors
- It targets elements based on the **presence or value of an HTML attribute**.
- Attribute selectors use **square brackets (`[]`)**.
- It can select elements based on whether an attribute exists, matches an exact value, or contains a specific value.

**### index.html**
```html
<input type="text" placeholder="Enter your name">
<input type="password" placeholder="Enter your password">
<a href="https://example.com">Visit Website</a>
```

```css
/* Selects elements that have a type attribute */
input[type] {
    border: 1px solid black;
}

/* Selects only input elements with type="text" */
input[type="text"] {
    background-color: lightyellow;
}

/* Selects links whose href starts with "https" */
a[href^="https"] {
    color: green;
}
```

**Common Attribute Selectors:**

| Selector | Meaning |
|---|---|
| `[attr]` | Selects elements that have the specified attribute. |
| `[attr="value"]` | Selects elements with an exact attribute value. |
| `[attr^="value"]` | Selects elements whose attribute value starts with the specified value. |
| `[attr$="value"]` | Selects elements whose attribute value ends with the specified value. |
| `[attr*="value"]` | Selects elements whose attribute value contains the specified value. |