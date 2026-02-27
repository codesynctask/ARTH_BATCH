# Chapter 3 – Functions in Python

## 1. What is a Function?

A **function** in Python is a reusable block of code that performs a specific task.

It helps in:

* Reducing repetition
* Making code organized
* Improving readability
* Breaking large problems into smaller parts

---

## 2. Creating a Function

In Python, we use the `def` keyword.

### Syntax:

```python
def function_name(parameters):
    # code block
    return value
```

### Example:

```python
def greet():
    print("Hello, World!")

greet()
```

Output:

```
Hello, World!
```

---

## 3. Function with Parameters

Parameters allow us to pass values into a function.

```python
def greet(name):
    print("Hello", name)

greet("Deepak")
```

Output:

```
Hello Deepak
```

---

## 4. Function with Return Value

The `return` keyword sends a result back.

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)
```

Output:

```
8
```

---

## 5. Types of Functions in Python

### 1. Built-in Functions

Already provided by Python.

Examples:

```python
print()
len()
type()
input()
```

---

### 2. User-defined Functions

Functions created by the programmer using `def`.

---

### 3. Anonymous Functions (Lambda)

Small one-line functions.

```python
square = lambda x: x * x
print(square(4))
```

Output:

```
16
```

---

## 6. Default Parameters

```python
def greet(name="Guest"):
    print("Hello", name)

greet()
greet("Deepak")
```

---

