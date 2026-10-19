## CSS Grid

- It is an 2d layout system.
- Helps divide page into rows & columns;
- Items are placed precisely within a structured grid.
- No more floating or positioning struggles.

## How to use a Grid
- **Step1:** Define a grid container.
```css
/* Turns this div into a grid container */
.container {
    display: grid;
}
```

- **Step2:** Define Rows & Columns.
```css
.container {
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: 100px 200px;
}
```

- **Step3:** Responsive Columns
```css
/* Using fr units for flexibility */
.container {
    grid-template-columns: 1fr 1fr 2fr;
}
```

- **Step4:** Positioning Items
```css
/* Control placement using grid-column & grid-row */
.item1 {
    grid-column: 1/3;
    grid-row: 1/2;
}
```