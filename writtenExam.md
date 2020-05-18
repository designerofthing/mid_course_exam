## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples, explanations, and potential use cases. Write your answer below and use markdown to format your text.

## Answer

They are higher order functions, meaning they take another function as an argument.

``` .forEach ```

This function goes through an array and executes a provided function once for each item in the array. 

example:
``` 
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
It could be used to take items from a database table and display them individually.

``` .map ```

This function goes through an array and executes a provided function and returns the results in a new array. 

example:
``` 
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```
It could be used to take key vaule pairs from a database table and displays them.

``` .filter```

This function goes through an array and removes items stipulated by the argument and returns what is left as the results in a new array. 

example:
``` 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```
It could be used to take away duplicate entries in database table before you display them.

``` .find```

This function goes through an array and removes the first item stipulated by the argument and returns the first item as a result. 

example:
``` 
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

```
It could be used to find the first instance of a particulr entry in a database table and display it.



