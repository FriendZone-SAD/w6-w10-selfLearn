// 1. first-class & higher-order functions

// const applyTwice = (f, n) => f(f(n));
// const double = (x) => x * 2;
// console.log(applyTwice(double, 2)); // 8

// 2. declarative code
const numbers = [3, 7, 10, 15, 20, 25];
const declare = numbers.filter( n => n%5 === 0).map( n => n**2);
console.log(declare); // [100, 225, 400, 625]

// 3. Immutability
const arr = [1, 2, 3];
const arrPlusTen = arr.map(n => n+10);
console.log(arr); // [1, 2, 3]
console.log(arrPlusTen); // [11, 12, 13]

// 4. Pure vs impure functions
let count = 0;
const plusOnehundred = n => n + 100; // pure function
const increaseCount = () => ++count; // impure function
console.log(plusOnehundred(10)); // 110
console.log(plusOnehundred(10)); // 110
console.log(increaseCount()); // 1
console.log(increaseCount()); // 2

// 5 function composition
const compose = (f, g) => x => f(g(x));
const add2 = n => n + 2;
const multiply3 = n => n * 3;
const add2ThenMultiply3 = compose(multiply3, add2);
console.log(add2ThenMultiply3(5)); // 21

// 6. function types
function add(a, b) {
  return a + b;
}
const sub = function(a, b) {
  return a - b;
}
const mul = (a, b) => a * b;
console.log(add(2, 3)); // 5
console.log(sub(5, 2)); // 3
console.log(mul(3, 4)); // 12

//7. function scope & nested functions
function calculator(a,b) {
    function add() {
        return a + b;
    }
    function multiply() {
        return a * b;
    }
    return { add: add(), multiply: multiply() };
}
console.log(calculator(3, 4)); // { add: 7, multiply: 12 }

// 8. closures
function makeCounter() {
    let count = 0;
    let increment = () => ++count;
    let getValue = () => count;
    return { increment, getValue };
}
const c = makeCounter()
c.increment()  
c.increment()  
console.log(c.getValue()) // 2