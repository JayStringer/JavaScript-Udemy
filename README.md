# JavaScript Cheat Sheet

## The Basics

### **Data Types**
- **Numbers:** Both decimal and integer values are represented as floats in JS.
- **String:** Sequence of characters, used for text.
- **Boolean:** Logical data type that can only be `true` or `false`.
- **Undefinded:** Data type of a variable that does not have a value yet.
- **Null:** Also means `non-existent`

### **Variable Decleration**
Variables are defined in JS with the prefix `var` eg. `var name = "jay";`. Variables are dynamic and as such do not require type declarations. Variables can be created without assigning them an initial value. These variables will be `undefined`.

### **Conolse Output**
Printing to the console is done with `console.log(output);`

### **User Input**
Data can be retrieved from a user by using the `prompt(input);` function, eg:

```JavaScript
var name = prompt("What is your name?");
```
### **String Coercion**
When two or more variables of different types are concatenated, JS will try to convert the data types of variables to all be the same as demonstrated below:

```JavaScript
var name = "Jay";
var age = 23;

console.log(jay + age);

/*
Console output will be the string "Jay23", the 23 is converted from a float datatype to a string to match the name variable.
*/
```