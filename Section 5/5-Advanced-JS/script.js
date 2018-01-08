/*
// Function Constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
    }
}

var john = new Person('John', 1990, 'Teacher');

john.calculateAge();

var jane = new Person("Jane", 1958, "Retired");

jane.calculateAge();

// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: "Designer"}
});

*/


// Primitives vs Objects

// // Primitives
// var a = 23;
// var b = a;

// a = 46;
// console.log(a);
// console.log(b);


// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// Functions
// var age = 23;
// var obj = {
//     name: "Jay",
//     city: "Manchester"
// };

// function change(a, b) {
//     a = 30;
//     b.city = "Birmingham"
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2018 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 *el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// function interviewQuestion(job) {
//     if(job === 'Designer') {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     } else if (job === 'Teacher') {
//         return function(name) {
//             console.log("What subject do you teach" + name + "?");
//         }
//     } else {
//         return function(name) {
//             console.log("Hello " + name + ", what do you do?");
//         }
//     }
// }

// var teacherQuestion = interviewQuestion("Teacher");
// var designerQuestion = interviewQuestion("Designer");

// teacherQuestion('John');
// designerQuestion('Mary');

// interviewQuestion("Teacher")("Mark");

// IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= (5 - goodLuck));
// })(5);

// Closures

// function retirement(retirementAge) {
//     return function(yearOfBirth) {
//         var a = " years until retirement"
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUK = retirement(65);
// retirementUK(1994);

// retirement(65)(1994);

// function interviewQuestion(job) {
//     if(job === 'Designer') {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     } else if (job === 'Teacher') {
//         return function(name) {
//             console.log("What subject do you teach" + name + "?");
//         }
//     } else {
//         return function(name) {
//             console.log("Hello " + name + ", what do you do?");
//         }
//     }
// }

/*
// My solution
function interviewQuestion(job) {
    var designerQuestion = ", can you please explain what UX design is?";
    var teacherQuestion = ", what subject to you teach?";
    var unknownJob = ", what do you do?";

    if(job === "Designer") {
        return function(name) {
            console.log(name + designerQuestion);
        }
    } else if(job === "Teacher") {
        return function(name) {
            console.log(name + teacherQuestion);
        }
    } else {
        return function(name) {
            console.log(name + unknownJob);
        }
    }
}

var designerQuestion = interviewQuestion("Designer")("John")
*/

// Course Solution
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === "designer") {
            console.log(name + ", can you please explain what UX design is?");
        } else if (job === "teacher") {
            console.log("What subject do you teach " + name + "?");
        } else {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

interviewQuestion('teacher')('Mark');
*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log("Good " + timeOfDay + " ladies and gentlemen! I'm " + this.name + ".");
        } else if (style === 'friendly') {
            console.log("Hey! What's up? I'm " + this.name + ". Have a nice " + timeOfDay + "!");
        }
    }
};

john.presentation('formal', 'morning')


var emily = {
    name: "Emily",
    age: 35,
    job: "Designer"
};

john.presentation.call(emily, 'friendly', 'afternoon');

