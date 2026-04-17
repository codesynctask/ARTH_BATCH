
### **1. CSS Selectors Table**

| **Category**  | **Selector** | **Example**         | **Description**                  |
| ------------- | ------------ | ------------------- | -------------`------------------- |
| **Universal** | `*`          | `* { margin: 0; }`  | Selects all elements             |
| **Element**   | `element`    | `p { color: red; }` | Selects all `<p>` elements       |
| **Class**     | `.class`     | `.box {}`           | Selects elements with class      |
| **ID**        | `#id`        | `#header {}`        | Selects element with specific ID |
| **Grouping**  | `A, B`       | `h1, p {}`          | Selects multiple elements        |

---

### **Combinator Selectors**

| **Selector**     | **Example** | **Description**              |
| ---------------- | ----------- | ---------------------------- |
| Descendant       | `div p`     | Selects `<p>` inside `<div>` |
| Child            | `div > p`   | Direct child only            |
| Adjacent sibling | `h1 + p`    | Next `<p>` after `<h1>`      |
| General sibling  | `h1 ~ p`    | All `<p>` after `<h1>`       |

---

### **Attribute Selectors**

| **Selector**    | **Example**        | **Description**    |         |                   |
| --------------- | ------------------ | ------------------ | ------- | ----------------- |
| `[attr]`        | `[type]`           | Has attribute      |         |                   |
| `[attr=value]`  | `[type="text"]`    | Exact match        |         |                   |
| `[attr~=value]` | `[class~="box"]`   | Contains word      |         |                   |
| `[attr          | =value]`           | `[lang             | ="en"]` | Starts with `en-` |
| `[attr^=value]` | `[href^="https"]`  | Starts with        |         |                   |
| `[attr$=value]` | `[href$=".pdf"]`   | Ends with          |         |                   |
| `[attr*=value]` | `[href*="google"]` | Contains substring |         |                   |

---

### **Pseudo-Class Selectors**

| **Selector**      | **Example**        | **Description**   |
| ----------------- | ------------------ | ----------------- |
| `:hover`          | `a:hover`          | Mouse over        |
| `:active`         | `button:active`    | When clicked      |
| `:focus`          | `input:focus`      | When focused      |
| `:visited`        | `a:visited`        | Visited links     |
| `:link`           | `a:link`           | Unvisited links   |
| `:first-child`    | `p:first-child`    | First child       |
| `:last-child`     | `p:last-child`     | Last child        |
| `:nth-child(n)`   | `li:nth-child(2)`  | Specific position |
| `:nth-of-type(n)` | `p:nth-of-type(2)` | Specific type     |
| `:not(selector)`  | `:not(p)`          | Excludes element  |
| `:empty`          | `div:empty`        | No children       |
| `:checked`        | `input:checked`    | Checked inputs    |
| `:disabled`       | `input:disabled`   | Disabled inputs   |
| `:enabled`        | `input:enabled`    | Enabled inputs    |
| `:required`       | `input:required`   | Required field    |
| `:valid`          | `input:valid`      | Valid input       |
| `:invalid`        | `input:invalid`    | Invalid input     |

---

### **Pseudo-Element Selectors**

| **Selector**     | **Example**          | **Description**       |
| ---------------- | -------------------- | --------------------- |
| `::before`       | `p::before`          | Insert content before |
| `::after`        | `p::after`           | Insert content after  |
| `::first-letter` | `p::first-letter`    | First letter          |
| `::first-line`   | `p::first-line`      | First line            |
| `::selection`    | `::selection`        | Selected text         |
| `::placeholder`  | `input::placeholder` | Placeholder text      |
| `::marker`       | `li::marker`         | List marker           |

---

### **Structural Selectors**

| **Selector**         | **Example**            | **Description** |
| -------------------- | ---------------------- | --------------- |
| `:first-of-type`     | `p:first-of-type`      | First of type   |
| `:last-of-type`      | `p:last-of-type`       | Last of type    |
| `:nth-last-child(n)` | `li:nth-last-child(1)` | From end        |
| `:only-child`        | `p:only-child`         | Only child      |
| `:only-of-type`      | `p:only-of-type`       | Only of type    |

---

### **Advanced / Special Selectors**

| **Selector**             | **Example**                   | **Description**                   |
| ------------------------ | ----------------------------- | --------------------------------- |
| `:root`                  | `:root {}`                    | Root element (`html`)             |
| `:target`                | `#section:target`             | URL target                        |
| `:lang()`                | `p:lang(en)`                  | Language selector                 |
| `:is()`                  | `:is(h1, h2)`                 | Matches any                       |
| `:where()`               | `:where(h1, h2)`              | Similar to `is` (low specificity) |
| `:has()`                 | `div:has(p)`                  | Parent selector                   |
| `::file-selector-button` | `input::file-selector-button` | File upload button                |

