# Linked List Implementation in JavaScript

This project provides a custom implementation of a singly linked list data structure in JavaScript. It offers a variety of methods for manipulating and interacting with the list.

## Features

The linked list implementation includes the following functionalities:

-   **`append(value)`:** Adds a new node with the given `value` to the end of the list.
-   **`prepend(value)`:** Adds a new node with the given `value` to the beginning of the list.
-   **`size()`:** Returns the total number of nodes in the list.
-   **`head()`:** Returns the first node in the list.
-   **`tail()`:** Returns the last node in the list.
-   **`at(index)`:** Returns the node at the specified `index`. Returns `null` if the index is out of bounds.
-   **`pop()`:** Removes the last element from the list and returns the removed node's value.
-   **`contains(value)`:** Returns `true` if the list contains a node with the given `value`, and `false` otherwise.
-   **`find(value)`:** Returns the index of the first node containing the given `value`, or `null` if the value is not found.
-   **`toString()`:** Returns a string representation of the linked list in the format: `( value ) -> ( value ) -> ( value ) -> null`. This makes it easy to visualize the list's contents.

## Usage

```javascript
// Example usage:
const LinkedList = require("./linked-list"); // Assuming your linked list code is in 'linked-list.js'

const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.prepend(5);
```

## Implementation Details

The linked list is implemented using a Node class, where each node stores a value and a pointer to the next node in the list. The linked list class maintains a reference to the head (first node) for efficient operations.

The provided methods leverage these pointers to perform insertions, deletions, searches, and other list manipulations.
