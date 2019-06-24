// console.log("page is connected");
// console.error("this is an error");
//console.something will print what you want to the console

//in js, // is a single line comment
/* 
this is a multi line 
comments
 */

/* 
    I'm sure many of you have heard of java
            Javascript has nothing to do with it
    A few things about js
        it is a programming
        it is a scripting
        it is interpreted
            the browser will run js line by line
        it is loosely typed
        it is dynamic
*/

/* 
js is loosely typed because variables can hold and 
    have transferred any datatype.
In java:    String string = "string";
In js:         string = 6;
*/

/* 
datatypes in js
        boolean true or false only
        string  is plain words
        number  is a number
        null    is a lack of value
        undefined   basically, variable has been declared, 
                    but has not been given value
        BigInt
        Object
        Symbol
*/
//////////////PRIMITIVE DATATYPES in javascript
//          number, string, boolean, null, undefined, symbol

////////////REFERENCED TYPES
//          object, function, array


//how can we declare a variable?
// var v1;
// v1 = null;
// var v2 = "5";
// v2 = true;
//this is prior to 2015 update
//this update is referred to as es6 or es2015

// let v3 = 12;

// const v4 =7;

/* 
const does not change
var and let are mutable

Scope
    Global      is accessible throughout the program
    Function    is accessible throughout the function
    Local       is accessible throughout the local block of code
*/

//v1-v4 are global variables

// v1="5";
// v2=7;
// console.log(v1+v2);
//when one of the operands is a string;
//this is known as string concatenation

// console.log("string "+true)
//notice the ';'
// let v5;
// console.log(v5);
// console.log(v6);
// console.log(v1);

let a1 = 10;
let a2 = "string";
let a3 = false;
let a4 = undefined;
let a5 = null;
let a6;

a2 = 12;

//unary operators
//  !   returns the opposite boolean value
//  typeof operator checked the datatype
//  isNaN() is a unary operator that checks if the
//operand is a number
//if it is, then false
//if it isnt then true
/* 
    '+x' operator turns the operand into the numeric equivalent
    ++x pre increment operator
    x++ post increment operator
    --x pre decrement operator
    x-- post decrement operator

binary operators
    + addition
    -   subtraction
    *   multiplication
    /   division
    **  exponent
    %   modulus
    ,   seperates assignments
    &&  logical and checked to see if both values are true
    ||  logical or  checks to see if one value is true
    ^   exclusive or  checked to see if both values are the same     
    <   less than
    >   greater than
    <=  less than or equal to
    >=  greater than or equal to
    =   is an assignment operator
    ==  is an equivalence operator
    ==  performs type coersion
    === is another equivalence operator
    js follows mathematical order of operations

ternary operators
    '?',':' checks a condition and returns one of two values

Just as extra look into bitwise operators
*/

/* 
falsey values in js
        false
        0
        null
        undefined
        ''
        NaN
*/

//control flow
///or flow control
// it is used both ways

//if statement
// if(false) console.log(true);

//if else statement
// if(6>7){
//     console.log(true);
// }else{
//     console.log(false)
// }

//if else if else statement
// if(4%3==0){
//     console.log(0)
// }else if(4%3==1){
//     console.log(1)
// }else{
//     console.log('else')
// }

//this is a switch statement, it will check
//multiple values in less space

// let x = 3;
// switch (x) {
//   case 1:
//     console.log("it is 1: " + x);
//     break;
//   default:
//     console.log("default " + x);
//   case 2:
//     console.log("it is 2: " + x);
//     break;
//   case 3:
//     console.log("it is 3: " + x);
// }

//for([declare variable][semicolon][check value
//(give stopping point)][semicolon][increment])
//{logic}

/*for loops will perform a function for each iteration
    of the loop
    */

//         let x =0;
// for(let x =1;x<100;x++){
//     console.log(x);
// }

//lets say i want to iterate through a loop
//as long as a condition is true
/*
    while loops will iterate through a loop as long
    as the condition, if it is never true, it will never
    run
    */
// let x = false;
// while(x){
//     console.log(x);
//     x--;
// }

// do{
//     console.log(x);
// }while(x)

/* 
        moral of the story:
            watch out for
            infinite loops
 */
// alert("this is js")
// console.log('this is a log')
// console.warn('this is a warning')
// console.error('this is an error')
// console.info('this is an informative line')
// console.trace();
// let x =4;
// let X =6;
// console.log(X);

//  another keyword that you will need to know

//this is how you declare a function
function myFunc() {
  console.log("this is the new function");
}
let x = 77;
function myFunc2(num) {
  console.error(num);
}
//this is how you call a function
// myFunc();

function myFunc3(haroldTheOldCat) {
  console.log(haroldTheOldCat);
}

function myFunc4() {
  for (let i = 0; i < 5; i++) {}
  for (var k = 0; k < 5; k++) {
    a = 15;
  }
  var k = 20;
  console.log(k);
  console.log(a);
}
/*
    var has global and function scope
    let and const has global local and function scope
*/
//var meVar = 3; //this is global
// let meVar = 3; //this is global
const meVar = 3; //this is global

function newFunc() {
  // var itHappens = true;//this is function scope
  // let itHappens = true; //this is function scope
  const itHappens = true; //this is function scope
  if (itHappens) {
    var panic = "yes"; //this is function scope
    // let panic = 'yes we are panicking'; //this is local scope
    // const panic = 'we are constantly panicking'; //this is local scope
    // console.log(panic)
  }
  console.log(panic);
}
// newFunc();

//welcome to closure

let driveCar =(function (){
    let miles=0;
    console.log('We have purchased the car')
    return function(){
        console.log('we are driving the car')
        return ++miles;
    }
})();

let newArr = [];
let kangaroo = [5, 10, 16, 19, 3];
//a data structure consisting of a collection of elements
//      (values or variables), each identified by
//      at least one array index or key

starfisheries = [5, 10, "mongoose", 19, "bravo", false, NaN, undefined];

// function loopthru(arr) {
//   for (let x = 0; x < arr.length; x++) {
//     console.log(arr[x]);
//   }
// }

//this is known as a for of loop
//  a for of loop will grab each
//   element of an array
function loopthruBetter(arr){
    for(let yoda of arr){
        console.log(yoda)
    }
}

//this is a for in loop
// a for in loop will get the 
//  index of each element
function loopthruBetter2(arr){
    for(let yoda in arr){
        console.log(yoda)
    }
}



// A object is a set of states and behaviors
//  the syntax for an object in JS is:

let yoda={
    name:'yoda',
    height: 'short',
    color: 'green',
    force: function (){
        console.log("yoda's short butt will kick yours");
        return this.name.toUpperCase()+" says YAAAAAAAA!!!!!!!";
    },
    walk: function (){
        console.log('hey, we ar wawkin heya')
    }
}

let longString= "this is a very long string, however..."+
    "it cant really move line to line"+ yoda.name;

let longString2= `now this is a really
long string
that can move from line to line
just like this person that I am using a template literal too access
his name. That dudes name is ${yoda.name}`

//anonymous function
//Functions stored in variables do not need function names. 
//  They are always invoked (called) using the variable name.
let funcHolder= function (){
    console.log('this my function')
    return "hero Bill"
}

//self invoking function
/*
The benefit of self-invoking functions 
is that they enable us to execute code 
once without cluttering the global namespace 
(without declaring any globals)
*/
(function (myargs){
    console.log(myargs)
}("cheese"));

//
// nested function
function birdNest(){
    let ourVar= 7;
    function babyBird(){
        let ourOtherVar= 15;
        console.log('babybird(): '+ ++ourVar);
    }
    //console.log("inside the parent function (nested)");
    babyBird();
    //console.log(ourOtherVar);//will not work
}

