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