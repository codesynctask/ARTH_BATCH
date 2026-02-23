

# Variables, Data Types, and Operators

## 1. Variables and Data Types

* **Variable:** A named location to store data in memory.

  ```python
  x = 10
  name = "John Doe"
  ```
* **Data Types in Python:**

  1. **Numeric:** `int`, `float`, `complex`

     ```python
     age = 25         # int
     price = 99.99    # float
     z = 2 + 3j       # complex
     ```
  2. **Text:** `str`

     ```python
     message = "Hello, Python"
     ```
  3. **Boolean:** `bool`

     ```python
     is_active = True
     ```
  4. **Sequence Types:** `list`, `tuple`, `range`

     ```python
     nums = [1,2,3]         # list
     coords = (4,5)         # tuple
     r = range(5)           # range
     ```
  5. **Set Types:** `set`, `frozenset`

     ```python
     s = {1,2,3}            # set
     ```
  6. **Mapping:** `dict`

     ```python
     student = {"name":"Kajal", "age":20}
     ```

---

## 2. Operators in Python

### 2.1 Mathematical Operators (for calculations)

| Operator | Example  | Description                     |
| -------- | -------- | ------------------------------- |
| `+`      | `5 + 3`  | Addition                        |
| `-`      | `5 - 3`  | Subtraction                     |
| `*`      | `5 * 3`  | Multiplication                  |
| `/`      | `5 / 3`  | Division (float result)         |
| `//`     | `5 // 3` | Floor division (integer result) |
| `%`      | `5 % 3`  | Modulus (remainder)             |
| `**`     | `5 ** 3` | Exponent (power)                |

Example:

```python
a = 7
b = 3
print(a + b)  # 10
print(a ** b) # 343
```

---

### 2.2 Comparison Operators (return Boolean)

| Operator | Example  | Description           |
| -------- | -------- | --------------------- |
| `>`      | `5 > 3`  | Greater than          |
| `>=`     | `5 >= 5` | Greater than or equal |
| `<`      | `3 < 5`  | Less than             |
| `<=`     | `3 <= 3` | Less than or equal    |
| `==`     | `5 == 5` | Equal to              |
| `!=`     | `5 != 3` | Not equal to          |

Example:

```python
x = 10
y = 20
print(x < y)  # True
print(x == y) # False
```

---

### 2.3 Assignment Operators (assign values)

| Operator | Example   | Equivalent to |
| -------- | --------- | ------------- |
| `=`      | `x = 5`   | Assign 5 to x |
| `+=`     | `x += 3`  | `x = x + 3`   |
| `-=`     | `x -= 3`  | `x = x - 3`   |
| `*=`     | `x *= 3`  | `x = x * 3`   |
| `/=`     | `x /= 3`  | `x = x / 3`   |
| `//=`    | `x //= 3` | `x = x // 3`  |
| `%=`     | `x %= 3`  | `x = x % 3`   |
| `**=`    | `x **= 3` | `x = x ** 3`  |

Example:

```python
x = 5
x += 2   # x = 7
```

---

### 2.4 Logical Operators (Boolean operations)

| Operator | Example          | Description           |
| -------- | ---------------- | --------------------- |
| `and`    | `True and False` | True if both True     |
| `or`     | `True or False`  | True if any True      |
| `not`    | `not True`       | Inverts Boolean value |

Example:

```python
a = True
b = False
print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

---

These notes cover the basics of Python variables, data types, and all common operators.

---

If you want, I can also **create a compact one-page visual table format** for all these operators with examples, so it’s easier to revise. Do you want me to do that?
