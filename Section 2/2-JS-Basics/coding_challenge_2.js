// Coding Challenge 1

//--------------------------------*--------------------------------//
// My solution
var current_year = 2018;
var years = [2001, 1999, 1994, 1806];
var ages = [];

for(var i = 0; i < years.length; i++) {
    ages[i] = current_year - years[i];
}


for(var i = 0; i < ages.length; i++) {
    if(ages[i] >= 18) {
        console.log("This person is of full age, they are " + ages[i]);
    } else {
        console.log("This person is not of full age, they are " + ages[i]);
    }
}

function print_full_age(years_array) {
    
    var ages = [];
    var results = [];
    
    for(var i = 0; i < years_array.length; i++) {
        ages[i] = current_year - years_array[i];
    
        if(ages[i] >= 18) {
            console.log("This person is of full age, they are " + ages[i]);
            results.push(true);
        } else {
            console.log("This person is not of full age, they are " + ages[i]);
            results.push(false);
        }

    }
    
    return results;
}

var full_1 = print_full_age([2002, 2018, 1994, 1745, 2012]);
var full_2 = print_full_age([202, 2014, 1976, 1769, 1523]);

console.log(full_1);
console.log(full_2);
//--------------------------------*--------------------------------//

// Course Solution

function printFullAge(years) {
    var ages = []; 
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    } 
    
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log("Person " + (i + 1) + " is " + ages[i] + " years old and is of full age.");
            fullAges.push(true);
        }
        else {
            console.log("Person " + (i + 1) + " is " + ages[i] + " years old and is not of full age.");
            fullAges.push(false);
        }
    }
    
    return fullAges;
}


var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999, 2011, 1786])