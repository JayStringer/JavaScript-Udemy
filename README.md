# JavaScript Cheat Sheet

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
Some operators have precedence over other, meaning that they are computed first. The is a table for this on this page https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.

---
### **Ternary Operation** 
A ternary operator or conditional operator can be used to set a variable equal to different values based on a condition. For example:

```JavaScript
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
// If activePlayer IS equal to 0, then activePlayer = 1, else activePlayer = 0
```

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

---
### **Execution Context**
An execution context can be thought of as a box, container or wrapper which stores variables, it's where a piece of our code is evaluated and executed.

- **Global Execution Context** Is an execution context that holds all of the code that is not inside of any function. It is associated with the **global object**, in the browser, that's the window object:
    ```JavaScript
    lastName === window.lastName // true
    ```
- When a **function** is run, it is run in it's own execution context, this is run on top of the execution stack.
    ```JavaScript
    var age = 23;
    
    function foo() {
        var age = 65;
        console.log(age);
    }
    foo();
    console.log(age);

    /*
    The console log will print 65 then 23, this is because the function is run on top
    of the execution stack, in this case before the global context where age is defined
    globally. The two age variables are completely different variables, there is no collision
    */
    ```

*An execution object itself is made of:*
- **Variable Object** 
    - Contains function arguments, inner variable declarations and function declarations.
- **Scope Chain**
    - Contains the current variable objects, and the variable objects of all it's parents. It answers the question "Where can we access a certain variable?"
- **"This" Variable**
    - Refers to the object as itself.

*An execution object is created in two phases:*
- **Creation Phase**
    - Creation of the Variable Object
        - The argument object is created, containing all of the arguments that were passed into the function.
        - Code is scanned for function declarations: for each function, a property is created in the Variable Object, pointing to the function.
        - Code is scanned for variable declarations: for each variable, a property is created in the Variable Object and set to undefined.
    - Creation of the scope chain
        - Each new function creates a scope: the space/environment, in which the variables it defines are accessible.
        - In JS there is **Lexical Scoping** where a function that is lexically within another function, gets access to the scope of the outer function.
    - Determine the value of the 'this' variable
        - In a regular function call the 'this' keyword points at the global object (the window object, in the browser).
        - In a method call (a function within an object), the 'this' variable points to the object that is calling the method.
        - The 'this' keyword is not assigned a value until a function where it is defined is actually called.

- **Execution Phase**
    - The code of the function that generated the current execution context is ran line by line.

---
### **Hoisting**
Hoisting lets functions statements be called before they are defined in the code, for example:

```JavaScript
// Despite the function being called prior to it's definition, this code will still run fine.
calculateAge(1965);

function calculateAge(year) {
    console.log(2018 - year);
}
```
This will not work for function expressions.

Variables are hoisted in a different way:

```JavaScript
console.log(age) // Prints 'undefined'
var age = 23;    // The variable is now defined.
console.log(age) // Prints 23
```

---
### **Lexical Scoping**
```JavaScript
var a = "Hello";                //| ------------------------------------------|^
first();                        //| ----> Global Scope                        |S
                                //|       [VO-Global]                         |C
function first() {              //|                                           |O
    var b = "Hi";               //| |---------------------------------------| |P
    second();                   //| | ----> first() scope                   | |E
                                //| |       [VO-1] + [VO-Global]            | |
    function second() {         //| |                                       | |C
        var c = "Hey";          //| | | ----> second() scope -------------| | |H
        console.log(a + b + c); //| | |  [VO-2] + [VO-1] + [VO-Global]    | | |A
    }                           //| |-|-----------------------------------|-| |I
}                               //|-------------------------------------------|N
```

---
### **Execution Stack vs Scope Chain**
The order in which functions are called, is not equal to the order in which functions are written lexically.

```JavaScript
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(c);
}

// In this instance the console will report: "Uncaught ReferenceError: c is not defined
```

---
### **DOM Manipulation**
**DOM** stands for *Document Object Model*. It is a structured representation of a html document. The DOM is used to connect webpages to scripts like JavaScript.

In your JS you can use:
```JavaScript
// This will select whatever has the 'html-id' ID from the document and give it a new value of 10
document.querySelector("#html-id").textContent = 10;

// This will assign the current value of whatever has the 'html-id' ID to the JS variable
var x = document.querySelector("#html-id").textContent;

// This will access the css of the class with the name 'class' and hide it
document.querySelector(".class").style.display = "none";

// You can also access an element by referencing it's ID, this only works with ID
document.getElementById('<id>').textContent = '0';
```

Manipulating the value of any css property is done with:
```JavaScript
document.querySelector("<selector>").style.<css_propery> = value;
```

---
### **Events**
Events notify the code that something has happened on the webpage. Examples of events are;
- Clicking a button
- Resizing a window
- Scrolling down
- Pressing a key

An event listener is a function that performs an action based on a certain event, it waits for a specific event to happen. All the different types of events that can be listened for can be found on this reference page https://developer.mozilla.org/en-US/docs/Web/Events.

```JavaScript
document.querySelector("<selector>").addEventListener("click", function_);
// Here, the event listener is waiting for a click on the chosen element, in which case it will run a given function as a "callback function".

 
// Alternatively, instead of calling a function that is already defined, the function can be written in the event handler argument itself as an anonymous function.
document.querySelector("<selector>").addEventListener("click", function() {
    // Do something
});
```

An event can only happen once the execution stack is empty, that is, all functions have returned. All events that are waiting to be processed are stored in a message queue.

---
## Advanced JavaScript
---

### **Everything Is An Object**
well, almost, everything that isn't a *primitive* data type, as listed in the data types section, is an object. This includes:
- Arrays
- Functions
- Objects
- Dates
- Wrappers for numbers, strings, booleans...

---
### **Constructors**
A constructor can be thought of in the same way as a class, it is a blueprint for objects, instances of a constructor inherit all the information contained within it.

Every object in JS has a `prototype` property which makes inheritance possible. The prototype property of an object is where we put methods and properties that we want other objects to inherit. The constructors prototype property is NOT the prototype of the constructor itself, it's the prototype of ALL instance that are created through it.

When  a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This is called the prototype chain.

Every object, is inherited from the base object, `object`. As such if the child instance was unable to find the method it was looking for in the prototype property of the parent, it will then look in the `object` prototype properties for it. If the method cannot be found in the object prototype, then object will point to `null`, which has no prototype.

```JavaScript
// We can create a new constructor like this...
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
    }
}

// An instance of this constructor can be created like this...
var john = new Person("John", 1990, "Teacher")
```

When the `new` operator is used, first a new EMPTY object is created, then the constructor function is called with the arguments specified. This is important because calling the constructor functions puts it on top of the execution stack in it's own execution context with it's own `this` variable. If the new operator didn't exist, when the `this` keyword was used it would be pointing at the global object, however as the new keyword IS used, it instead points to the new empty object that it created.

```JavaScript
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// You can even add methods to the prototype property of an object...
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth)
}
// Now calculateAge is accessible in the same way it was before
```

`Object.create` allows finer control over inheritance structures of objects.

```JavaScript
// We can also create constructors in this way...
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// The information of an object can be declared and defined like this...
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

// ...or like this...
var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: "Designer"}
});
```

---
### **Primitives vs Objects**
Variables containing primitives, hold the data inside of the variable itself:

```JavaScript
var a = 23;
var b = a;

// When we mutate a after declaring b = a...
a = 46;

console.log(a); //-> Prints 46 to the console
console.log(b); //-> Prints 23 to the console
```

On objects, variables associated with an object, do not hold data themselves, they instead contain a reference to the place in memory where the data is stored:

```JavaScript
var obj1 = {
    name: 'John',
    age: 26
};

// Object 2 is defined as being equal to object 1...
var obj2 = obj1;

// But when we mutate a variable of object 1...
obj1.age = 30;

// ...it also has changed the value of age in object 2
console.log(obj1.age); // -> Prints 30 to the console
console.log(obj2.age); // -> Also prints 30 to the console
```

Another example of the difference can be seen when using functions:

```JavaScript
var age = 23;
var obj = {
    name: "Jay",
    city: "Manchester"
};

// This function will mutate the arguments it receives
function change(a, b) {
    a = 30;
    b.city = "Birmingham"
}

// As the argument 'age' is a primitive variable, a copy will be made
change(age, obj);
// This means that the original value for 'a' (outside of the function) will not be changed

// As a result...
console.log(age); // -> This remains 23
console.log(obj.city); // -> But this is changed
```
---
### **Functions**
A function is an instance of the Object type, it behaves like any other object. We can store functions in a variable, pass a function as an argument to another function and also return a function from a function. All of this means that JS has **first-class functions**

Using callback functions can be very powerful:

```JavaScript
var years = [1990, 1965, 1937, 2005, 1998];

// Here one function is created that uses a function given as an argument
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// This means that the same function can be used with different parts...
function calculateAge(el) {
    return 2018 - el;
}
// ...To do different things
function isFullAge(el) {
    return el >= 18;
}
// Here the function is used to calculate some ages
var ages = arrayCalc(years, calculateAge);
// Then those ages are used in the same function with a different callback function
// to determine that person is of full age
var fullAges = arrayCalc(ages, isFullAge);
```

As mentioned you can also return a function from a function:

```JavaScript
// A function is defined that returns another function depending on the job given
function interviewQuestion(job) {
    if(job === 'Designer') {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === 'Teacher') {
        return function(name) {
            console.log("What subject do you teach" + name + "?");
        }
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

// As the function returns something it needs to be held in a variable
var teacherQuestion = interviewQuestion("Teacher");
var designerQuestion = interviewQuestion("Designer");

// And now the interview questions can be asked to specific people
teacherQuestion('John');
designerQuestion('Mary');

// You can also pass more than one argument for more than one function like this
interviewQuestion("Teacher")("Mark");
```

---
### **Immediately Invoked Function Expressions (IIFE)**
Temporary functions can be written and then immediately called. So you can turn something like this:
```JavaScript
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
```

Into something like this:
```JavaScript
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
```

To add arguments to this kind of function you can do this:
```JavaScript
(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= (5 - goodLuck));
})(5);
```

The use case for this is for privacy, in this instance, the variable score is not accessible from the global scope.

---
### **Closures**
Closure means an inner function always has access to the variables and parameters of its outer function, even after the out function has returned.

An example of this:
```JavaScript
function retirement(retirementAge) {
    return function(yearOfBirth) {
        var a = " years until retirement"
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUK = retirement(65);
retirementUK(1994);
```
Even though the `a` variable is part of the `retirement` function, which has finished returning when it is used in the declaration of `retirementUK`, it is still accessible for the function that it returns, so calling `retirementUK(1994)` does work.

---
### **Bind, Call And Apply**
Methods can be called and given other `this` variables. This is called *method borrowing* an example is shown below:

```JavaScript
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log("Good " + timeOfDay + ". I'm " + this.name + ".");
        } else if (style === 'friendly') {
            console.log("Hey! I'm " + this.name + ". Have a nice " + timeOfDay + "!");
        }
    }
};

john.presentation('formal', 'morning');


var emily = {
    name: "Emily",
    age: 35,
    job: "Designer"
};

// The presentation method stored in the john object can be called
// using a different object for the 'this' variables. The other
// variables for the method are passed in afterwards.
john.presentation.call(emily, 'friendly', 'afternoon');
```

There is another function borrowing method called `apply` that can be used in a similar way,the only difference is the arguments for the method that is being borrowed accepts an array instead.

```JavaScript
// In this case this won't work as the presentation method isn't expecting an array.
john.presentation.apply(emily, ['friendly', 'afternoon'])
```

Another similar method function is `bind`. Bind will instead make a copy of the function so that it can be saved elsewhere. This is called carrying:

```JavaScript
// This will save the argument of 'friendly' to the style argument
var johnFriendly = john.presentation.bind(john, 'friendly');
// so when the function is called, only the time of day needs to be set
johnFriendly('morning');
```

---
### ****