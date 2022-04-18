/*********************************************************************************
 * WEB222 – Assignment 01
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Qing Zhang   Student ID:130982218    Date: 2022-01-28
 *
 ********************************************************************************/


/*****************************
 * Task 1
 *****************************/
/*

a) Infinity
Infinity is a special number and it is larger than any finite number. In contrary, -Infinity is a special number and it is smaller than any finite number. 
To demonstrate, we can do the following calculations: 

var result1 = 222 / 0; // Divide a finite number by zero
console.log(result1); // output: Infinity

var result2 = 222 / Infinity; // Divide a finite number by Infinity
console.log(result2); // output: 0


b) Undefined
Undefined type is one of the primitive types, When a variable is declared but not initialized, it is assigned undefined.

var newVar; 
console.log(newVar)  // output: undefined

var array[3] = {0, 1, 2}
console.log(array[4]); // output: undefined

c) NaN
NaN is a special number representing Not A Number, it is a global property that indicates that value is not a number.
The initial value of NaN is NaN. We usually see NaN as the return value of an unsuccessful math calculation.
The following example all generate NaN outputs:

Math.sqrt(-1);         // Take the square root of any negative number
'ASTRING' * 1;               // math operator cannot work with a non-number operand
parseInt('aString');         // a string value cannot be parsed to a number


/*****************************
 * Task 2
 *****************************/
var result1 = parseInt('1010', 2);
console.log("Convert 1010 (binary) to decimal, output is " + result1); // 10

var result2 = parseInt('AF', 16);
console.log("Convert AF (hex) to decimal, the output is " + result2); // 175

var result3 = parseInt('713', 8);
console.log("Convert 713 (Octal) to decimal, the output is " + result3); // 459


/*****************************
 * Task 3
 *****************************/

var celsius = 21;
var Fahren = celsius * 9 / 5 + 32;
console.log(celsius + "C is " + Fahren.toFixed(2) + "F");

var Fahren2 = 430;
var celsius2 = (Fahren2 - 32) * 5 / 9;
console.log(Fahren2 + "F is " + celsius2.toFixed(2) + "C");


/*****************************
 * Task 4
 *****************************/
// a)
function largerNum(num1, num2) {
    var result;
    (num1 > num2) ? (result = num1) : (result = num2);
    return result;
}

//b)
var greaterFunc = function greaterNum(num1, num2) {
    var result;
    (num1 > num2) ? (result = num1) : (result = num2);
    return result;
};

//c)
console.log("The larger number of 5 and 12 is", largerNum(5, 12));
console.log("The larger number of 99 and 100 is", greaterFunc(99, 100));


/*****************************
 * Task 5
 *****************************/
// a)
function Evaluator() {
    var totalScore = 0;
    var aveScore;
    for (var i = 0; i < arguments.length; i++) {
        totalScore += arguments[i];
    }
    aveScore = totalScore / arguments.length;
    if (aveScore >= 25) {
        return true;
    } else {
        return false;
    }
}

// b)
console.log("Average grater than or equal to 25: ", Evaluator(21, 24, 18));
console.log("Average grater than or equal to 25: ", Evaluator(30, 34, 38));
console.log("Average grater than or equal to 25: ", Evaluator(42, 44, 48));


/*****************************
 * Task 6
 *****************************/
// a)
function showMultiples(num, numMultiples) {
    var result = "The calculation that " + num + " times 1 through " + numMultiples + ", the results are: \n";

    for (var i = 1; i <= numMultiples; i++) {
        result += num + " x " + i + " = " + (i * num) + "\n";
    }

    return result;
}

// b)
console.log(showMultiples(5, 4));
console.log(showMultiples(3, 8));
console.log(showMultiples(9, 16));


/*****************************
 * Task 7
 *****************************/
var Increment = (function() {
    var counter = 100; // Store 100 as a counter in the outer function.
    return function() {
        counter += 100; // Increment the counter by 100 in the inner function and return.
        return counter;
    }
})();

var retValue = Increment();
retValue = Increment();
retValue = Increment();

console.log(retValue);