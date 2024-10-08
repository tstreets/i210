// Ways to create variables
// 1. Using var makes a variable that can change the value and globally referenced
var myName = "Ty";

clownName = "T";

// 2. let makes variables that you can change the value

let myTitle = "the Kangaroo Guy";

// life event
myTitle = "the Crocodile Guy";

// 3. const variables cannot change their value. const is short for constant

const ssn = 123;

// ssn = 312;

// Variable Types
// Primitive Variables Types
// 1. Strings
let str1 = "Blah blah blah";
// const str2 = '123';
let str3 = "440J";
// Starting quote type MUST match ending quote type
const str4 = `String that can be broken
into multiple lines`;

// 2. Number
let myAge = 52;
const oneLessThanZero = -1;
let numberOfKidsThatIHave = 2.33;

// 3. Boolean
let amIBald = true;
const isTheSunKindaFar = false;

// Complex Variables

// 4. Null / Undefined
let myCar;

// 5. Arrays - list of stuff
const myFavouriteColours = ["purple", "blue", "black"];
const randomStuff = [true, 1, "blah", -200];

// 6. Objects - variables that you need to describe
const person = {
  // property of the object
  hairColor: "black",
  // methods are like functions that belong to the object
  sayMyName() {},
};

// 7. Function
function doSomething() {
  // Make your function something
}
