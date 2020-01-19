//*******************************************************************************************
// Question 1- Declare and initialise a variable with a string value.
var name="shaun";
console.log(name) 
// 1st Answer:shaun
//*******************************************************************************************
// Question 2-
// Create and object called person and give it two properties (a key value and a value) of your choice.
var person = {
    job: "software developer",
    age: 30
} ;
console.log(person.job);
//  2nd Answer: software developer
console.log(person.age);
//  2nd Answer: 30
//*******************************************************************************************
// Question 3 - 
// Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks
// the value of outOfStock.
// If it is true, console log "Out of Stock". Otherwise log "In stock".
var outOfStock=false;
if (outOfStock===true){
console.log("Out of stock");}
else {
    console.log("In stock");
} 
//  3nd Answer: In stock
//*******************************************************************************************
// Question 4 
// Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks
// Important t=term
var numarray = [
    // first item: 
    {
       t:1
    },
    // second item
    {
        t:1
    },
    // third item
    {
        t:2
    },
    // fourth item
    {
        t:3
    },
    // fifth item
    {
        t:5
    }
];
for(var i = 0; i < numarray.length; i++) {
    var counter=i+1;
    console.log(' Q4 Term', counter, 'in the array=' ,numarray[i].t);
}
//4th Answer:
//Q4 Term 1 in the array= 1                       level-1.js:57 
//Q4 Term 2 in the array= 1                       level-1.js:57 
//Q4 Term 3 in the array= 2                       level-1.js:57 
//Q4 Term 4 in the array= 3                       level-1.js:57  
//Q4 Term 5 in the array= 5                       level-1.js:57  
//*******************************************************************************************
// Question 5
// Create a for loop that counts from 15 to 25. Console log the value of the counter variable
// inside the loop.
var c=0;
for(var j = 5; j < 26; j++) {
    var c=c+1;
    console.log('Q5 The', c ,'iteration in the loop=', j);
}
//5th Answer:
// Q5 The 1 iteration in the loop= 5                             level-1.js:72 
// Q5 The 2 iteration in the loop= 6                             level-1.js:72 
// Q5 The 3 iteration in the loop= 7                             level-1.js:72 
// Q5 The 4 iteration in the loop= 8                             level-1.js:72 
// Q5 The 5 iteration in the loop= 9                             level-1.js:72 
// Q5 The 6 iteration in the loop= 10                            level-1.js:72
// Q5 The 7 iteration in the loop= 11                            level-1.js:72
// Q5 The 8 iteration in the loop= 12                            level-1.js:72
// Q5 The 9 iteration in the loop= 13                            level-1.js:72
// Q5 The 10 iteration in the loop= 14                           level-1.js:72
// Q5 The 11 iteration in the loop= 15                           level-1.js:72
// Q5 The 12 iteration in the loop= 16                           level-1.js:72
// Q5 The 13 iteration in the loop= 17                           level-1.js:72
// Q5 The 14 iteration in the loop= 18                           level-1.js:72
// Q5 The 15 iteration in the loop= 19                           level-1.js:72
// Q5 The 16 iteration in the loop= 20                           level-1.js:72
// Q5 The 17 iteration in the loop= 21                           level-1.js:72
// Q5 The 18 iteration in the loop= 22                           level-1.js:72
// Q5 The 19 iteration in the loop= 23                           level-1.js:72
// Q5 The 20 iteration in the loop= 24                           level-1.js:72
// Q5 The 21 iteration in the loop= 25                           level-1.js:72
//*******************************************************************************************
// Question 6
// Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
//
var tol=20;
for(var k = 5; k < 26; k++) {
    if (k===tol){
        console.log('The target value in Q6=', k); 
}
}
// 6th Answer:
// The target value in Q6= 20                                   level-1.js:103 
//*******************************************************************************************
// Question 7
// Create an array of two objects. Each object must have the same three properties (with different values):
// one property with a string value
// one property with a number value
// one property with a boolean value
// Loop through the array and console log the number value and the boolean value.
var member = {
    job: "police officer",
    age: 44,
    lifeinsurance:true
} ;
var citizen = {
    job: "university student",
    age: 21,
    lifeinsurance:false
} ;
var objarray = [
    // first item: 
    member,
    // second item
    citizen
];
for(var i = 0; i < objarray.length; i++) {
var counter=i+1;    
console.log('Q7 the age of person ',counter,' = ',  objarray[i].age);
console.log('Q7  Does person ',counter,' have life insurance? =', objarray[i].lifeinsurance);
}
// 7th Answer: 
// Q7 the age of person  1  =  44                        level-1.js:134
// Q7  Does person  1  have life insurance? = true       
// Q7 the age of person  2  =  21                        
// Q7  Does person  2  have life insurance? = false      
//**********************************************************************************
// Question 8
// Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// Inside the function, log the string "I don't like " together with the argument.
// Call the function and pass in a value of your choice
function whatIDontLike(thingIDontLike) {
    console.log("I don't like " + thingIDontLike);
}
whatIDontLike("giraffes");
//  8th Answer: I don't like giraffes                   level-1.js:149
//***********************************************************************************
// Question 9
// Create a function that accepts two arguments.
// Inside the function, subtract the second argument from the first and console log the result.
function whatToSubtract(xTerm,yTerm) {
    console.log(xTerm-yTerm);
}
whatToSubtract(1,2);
//  9th Answer: -1                                     level-1.js:156
//***********************************************************************************
//Question 10
//Create an empty array.
//Create a function that accepts one argument.
//Inside the function, add the argument to the array.
//Call the function and pass in a value of any type.
var progArray=[];
function thingsToJoin(theThing) {
    progArray.push(theThing);
}
thingsToJoin(7);
thingsToJoin(10);
console.log(progArray);
//  10th Answer:                                       level-1.js:172
// (2) [7, 10]
// 0: 7
// 1: 10
// length: 2
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////