let text= "Hello World!"
console.log(text[2]);

// let number = 8; 
// console.log(number);

// let number = 8.9999
// console.log(number);

(5.1234).toPrecision(3);

function number(x,y) {
    const result = Number.parseInt(x,y)
    if(Number.isNaN(result)){
        return 0;
    }
    return result * 10;

}

console.log(number ('5',10));

const numOne = 1000
const numTwo = Number(1000);
const numThree = new Number(1000);

console.log(typeof numTwo);
console.log(typeof numThree);
console.log(numOne===numTwo);
console.log(numTwo===numThree);
console.log(numTwo==numThree);
console.log(numThree)

console.log(`numOne ${numOne}, numTwo ${numTwo}, numThree ${numThree}`);

function typeOfNaN(x) {
    if (Number.isNaN(x)) {
      return 'Number NaN';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
}

console.log(Number.isNaN(12))
console.log(Number.isNaN(1))
// The above two are both numbers, thus false
console.log(Number.isNaN(0/0))
// dividing by 0 results in undefined, thus not a number - > true
console.log(Number.isNaN(NaN))
// NaN is obviously NaN, thus true
console.log(Number([1,2,3]))
// The above counts as NaN as its not a single number, but an array of numbers

console.log(Number.isFinite(0));
console.log(Number.isFinite(-12));
console.log(Number.isFinite(Infinity));

console.log(224.56.toFixed(1))
console.log(224.56.toLocaleString());

function money(x,y){
    x = Number(x)
    y = y || "$"

    if(Number.isNaN(x) || typeof y != 'string') {
        return "WRONG!"
    }
    return y + x.toFixed(2)
}

console.log(money(12,))
console.log(money(12,"€"))

const arr1 = ['a', 'b', '3', 'four']

console.log(arr1[3])

console.log('Hello World'[4])

const txt = ('Hello World')
console.log(txt[7] = "e")
// Cant modify strings

console.log(txt + ", you all are okay")

const testFunc = function(x){console.log(x);}

testFunc(12 + "x12");
testFunc('is a square!');

// function literal
(function(x,y){ console.log(x+y)})(2,5);


// callbacks

/* function anyFunction(data, callback){
    async-process(data).then(       \\do asynchronous request
        function(result){           \\then on return
            callback(result)        \\execute callback
        }
    )
}
*/

// The below is callback hell, with results each function calling from another function within it until it gets too confusing to read 
/* 
functionOne(data, function(resultOne)){
    functionTwo(resultOne, function(resultTwo)){
        functionThree(resultTwo, function(resultThree)){
            more code~~~~~
        }
    }
}
*/

console.log('Hello World'.length);

const text1='first name'
const text2='last name'
const fullName=(text1.concat(" "+text2));
console.log(fullName);

console.log(text1.toUpperCase());

console.log(text1.trim())

const newTxt = new String('SDV503')
console.log(newTxt)
const newTxtToString = newTxt.toString()

console.log(newTxtToString)

function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }function second(){
    console.log(2);
  }
  first();
  second();
  
/*
A callback is also known as a high-order-function

passing a function another function "otherFunction"

example pattern->

let students = ['Dale', 'Frank', 'Kyran', 'Aaron']

students.forEach(function (eachStudent, index)){
    console.log(index + 1 + " " + eachStudent)
}

When we pass a function as an argument to another function, you are only passing the function definition ()
otherFunction has the callback function in its paramaters as function definition
it can execute the callback at any time

------------------------------------------------------------------------------------------------

const dat=[]
function myData(dataFromUser){
    if (typeof dataFromUser === "string"){
        console.log(dataFromUser)
    }
    else if (typeof dataFromUser === 'object'){
        for (let item in dataFromUser){
            console.log(item + ":" + dataFromUser[item])
        }
    }
}

const result = function input(dataInput, callback){
    dat.push(dataInput)
    callback(dataInput)
}
*/

/*
let pathToNextLocation
fs.readFile('./file/location1.md', 'utf-8', function(err,val)){
    if(err) throw new Error
    pathToNextLocation = val;
    fs.readFile(pathToNextLocation, 'utf-8', function(err,val)){
        etcetcetc
    }
}
1-name your functions and declare them and pass name only of the function into as a callback

2-Seperate your code into modules. This makes for good coding in Express.js
*/



