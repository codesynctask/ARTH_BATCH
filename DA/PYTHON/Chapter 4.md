# Chapter 4 – Loops in Python

Loops are used to execute a block of code repeatedly.

In Python, there are two main types of loops:

1. `for` loop
2. `while` loop

---

## 1. for Loop

The `for` loop is used to iterate over a sequence (list, tuple, string, range, etc.).

### Syntax:

```python
for variable in sequence:
    # code block
```

### Example 1: Using range()

```python
for i in range(5):
    print(i)
```

Output:

```
0
1
2
3
4
```

---

### Example 2: Loop through a list

```python
numbers = [10, 20, 30]

for num in numbers:
    print(num)
```

---

### Example 3: Loop through a string

```python
for char in "Python":
    print(char)
```

---

## 2. while Loop

The `while` loop runs as long as the condition is True.

### Syntax:

```python
while condition:
    # code block
```

### Example:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

---

## 3. break Statement

Used to stop the loop immediately.

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

---

## 4. continue Statement

Skips the current iteration and moves to the next.

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

---

## 5. pass Statement

Used as a placeholder.

```python
for i in range(5):
    pass
```

---

## 6. Nested Loops

A loop inside another loop.

```python
for i in range(3):
    for j in range(2):
        print(i, j)
```

---

## 7. Loop with else

In Python, loops can have an `else` block.

The `else` runs when the loop completes normally (not stopped by break).

```python
for i in range(3):
    print(i)
else:
    print("Loop finished")
```

---

## 8. Infinite Loop

```python
while True:
    print("Running...")
```
