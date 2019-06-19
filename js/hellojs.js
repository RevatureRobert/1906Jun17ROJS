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
    Function
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

//         const x =0;
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