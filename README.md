# JavaScript Cheat Sheet

## The Basics

---
### **Data Types**
- **Numbers:** Both decimal and integer values are represented as floats in JS.
- **String:** Sequence of characters, used for text.
- **Boolean:** Logical data type that can only be `true` or `false`.
- **Undefined:** Data type of a variable that does not have a value yet.
- **Null:** Also means `non-existent`

---
### **Variable Declaration**
Variables are defined in JS with the prefix `var` eg. `var name = "jay";`. Variables are dynamic and as such do not require type declarations. Variables can be created without assigning them an initial value. These variables will be `undefined`.

---
### **Console Output**
Printing to the console is done with `console.log(output);`

---
### **User Input**
Data can be retrieved from a user by using the `prompt(input);` function, eg:

```JavaScript
var name = prompt("What is your name?");
```
### **Type Coercion**
When two or more variables of different types are concatenated, JS will try to convert the data types of variables to all be the same as demonstrated below:

```JavaScript
var name = "Jay";
var age = 23;

console.log(jay + age);

/*
Console output will be the string "Jay23", the 23 is converted from a float datatype to a string to match the name variable.
*/
```

---
### **Operator Precedence**
Some operators have precedence over other, meaning that they are computed first. The is a table for this on this page https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

---
### **If/Else Statements**
Defining an if else statement is very similar to C++ as demonstrated below:

```JavaScript
var is_employed = "yes";

if(is_employed === "yes") {
    console.log("Congratulations, you're employed!");
} else {
    console.log("You don't appear to be employed");
}

// This would print "Congratulations, you're employed!" to the console.
// Changing 'is_employed' to a boolean value means we can use the implicit value of the variable to write the if/else statement.

var is_employed = false;

if(is_employed) {
    console.log("Congratulations, you're employed!");
} else {
    console.log("You don't appear to be employed");
}

// In this case "You don't appear to be employed" would be printed to the console.
```

Different evaluators can be used in JavaScript depending on the application:

```JavaScript
var age = 23;
// The "===" evaluator compares either side without type coercion
if(age === "23") {
    console.log("Yeah, you're 23!");
}
// This wouldn't print anything to the console as a float of 23 is being compared to the string "23" which is different

//----------------*----------------//

// The "==" evaluator compares either side WITH type coercion
if(age == "23"){
    console.log("Yeah, you're 23!");
}
// In this instance "Yeah you're 23!" would be printed to the console as the float value for 23 is converted to string for the evaluation.
```

---
### **Switch Statement**
A switch statement can be used as shown below:

```JavaScript
var job = "Teacher";

switch(job) {
    case "Teacher":
        console.log("John teaches kids.");
        break;
    case "Driver":
        console.log("John drives a cab");
        break;
    case "Cop":
        console.log("John helps fight crime.");
        break;
    default:
        console.log("John does something else.");
}
```

---
### **Function Statements**
Function statements are written in JS as shown below:

```JavaScript
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

// Function can be used like this:
var ageJohn = calculateAge(1990); //-> Returns 28
```

---
### **Function Expressions**
The difference between an expression and a statement is that an expression produces a value or outcome whereas a function statement just does something when it is called. Function expressions are written in JS as shown below:

```JavaScript
var calculateAge = function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}
```

---
### **Arrays**
```JavaScript
var names = ["John", "Jane", "Mark"]; //-> This is an Array
var years = new Array(1990, 1969, 1948); //-> This is an Array

// Arrays are zero indexed so typing...
console.log(names[2]);
// Prints 'Mark' to the console.

// Elements of arrays can be mutated...
names[1] = "Ben";
// Reassigns 'Jane' to 'Ben' in the names list

// Data types can be mixed in an array...
var john = ['John', 'Smith', 1990, 'Teacher'];

// To add more data to an array...
john.push("Blue");
// Adds a new element "Blue" to the end of the array
john.unshift("Mr.");
// Adds a new element "Mr." to the start of the array

// To remove data from an array...
john.pop();
// Removes the last element in the array, in this case it would be "Blue" that is removed
john.shift();
// Removes the first element in the array, in this case it would be "Mr." that is removed

john.indexOf("Smith"); //-> Returns the index of an element in an array
// If the element that is being searched for doesn't exist, indexOf() returns -1
john.indexOf("Mustang"); // -> Returns -1
```

---
### **Objects**
An object holds key value pairs:

```JavaScript
var john = {
    name: "John",
    lastName: "Smith",
    age: 23,
    job: "Teacher",
    yearOfBirth: 1990,
    isMarried: false
};

// The values of an object can be accessed with the dot operator
console.log(john.job); //-> Prints 'Teacher' to the console
// Values can also be accessed like this:
console.log(john['job']); //-> Also prints 'Teacher' to the console

var xyz = 'job';
console.log(john[xyz]); //-> This also prints 'Teacher' to the console

// Object data can be mutated too...
john.lastName = 'Miller'; //-> Changes the 'lastName' value from 'Smith' to 'Miller'
john['job'] = 'Developer'; //-> Changes the 'job' value from 'Teacher' to 'Developer'
```

There is another way to create and populate an object:

```JavaScript
var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane['yearOfBirth'] = 1969;
jane['job'] = "Retired";
jane['isMarried'] = true;
```

---
### **Objects and Methods**
Objects can not only hold every data type as values but also arrays and functions:

```JavaScript
var john = {
    name: "John",
    lastName: "Smith",
    job: "Teacher",
    yearOfBirth: 1990,
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function(yearOfBirth) {
        return 2018 - yearOfBirth;
    }
};

// The function can be called in the object like this:
console.log(john.calculateAge(1990));
```

In order to use values associated with an object as arguments for functions within that object, you can do this:

```JavaScript
var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }
};

// Now when we call the calculate age key...
console.log(john.calculateAge());
// Returns 28, age is calculated using object value 'yearOfBirth' instead of a given value.
```

Key value pairs can be defined in a function within an object too:

```JavaScript
var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
    }
};

john.calculateAge();
// Creates a new key value pair with the key age and the result of the function as the value.
```

---
### **Loops and Iteration**
There are lots of different types of loops. This is a simple for loop:

```JavaScript
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// Prints 0, 1, 2, 3... up to 9 in the console.
```

To iterate through an array you can do this:

```JavaScript
var names = ["John", "Jane", "Mary", "Mark", "Bob"];

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}
// Prints 'John', 'Jane'... up to 'Bob' as the length of the array is 5 and 'Bob' is the 5th element of names.
```

Another type of loop available in JS is a while loop:

```JavaScript
var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
```

Break is used to break out of a loop:

```JavaScript
for (var i = 1; i <= 5; i++) {
    console.log(i);
    if(i === 3) {
        break;
    }
}
// This loop will 'break' the loop when 'i' is equal to three, completely leaving the loop.
```

Continue is used to break out of an iteration of a loop early:

```JavaScript
for (var i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i);
}
// This loop will 'continue' to the next iteration of the loop when 'i' is equal to three.
```
