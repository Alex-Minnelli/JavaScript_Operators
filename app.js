console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;

let add = a+b;
let minus = a-b;
let multiply = a*b;
let dividing = a/b;

console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

/* YOUR CODE HERE

    What is the value of: num + str?
      1111 - string
    What is the value of: num + str2?
      11eleven - string
    What is the value of: num + isPresent?
      12 - number
    What is the value of: firstName + num?
      Frodo11 - string
    What is the value of: isPresent + str?
      true11 - string
    What is the value of: firstName + lastName?
      FrodoBaggins
*/

console.log(num+str);
console.log(num+str2);
console.log(num+isPresent);
console.log(firstName+num);
console.log(isPresent+str);
console.log(firstName+lastName);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

/* YOUR CODE HERE

    What is the value of: val == str3?
      true
    What is the value of: val === str3?
      false
    What is the value of: !isPresent2?
      true
    What is the value of: (“eleven” == str4 && val >= str3)?
      false
    What is the value of: (!isPresent2 || isPresent2)?
      true
    What is the value of: 0 == false?
      true
    What is the value of: 0 === false?
      false
    What is the value of: 0 != false?
      false
    What is the value of 0 !== false?
      true

*/

console.log(val == str3); //true
console.log(val === str3); //false
console.log(!isPresent2); //true
console.log("eleven" == str4 && val >=str3); //false
console.log(!isPresent2 || isPresent2); //true
console.log(0 == false); //false
console.log(0 === false); //false
console.log(0 != false); //true
console.log(0 !== false); //false