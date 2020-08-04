// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

//   document.getElementById("display-element").innerHTML = currentDate;
// }
//  const displayDate = ()

// Write a JavaScript program to convert a number to a string.



// Write a JavaScript program to convert a string to the number.



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean


  // * Null


  // * Undefined


  // * Number


  // * NaN

  
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.
// I tested BOTH of these in repl.it but it wont work on my terminal

let a = 5;
let b = 10;

let sum = a + b;

console.log("The Sum is", sum);

// I tested the this in repl.it but it wont work on my terminal

// Adding two numbers with the arguments of "X" and "Y" to return the sum of 
// said numbers

function addingTwoNumbers(x,y){
  const sum = x + y;

  return sum
}
//To call function: addingTwoNumbers(x,y);

// Write a JavaScript program that runs only when 2 things are true.

  // "A" must always equal 50
  const A = 50
  // "B" must always equal 25
  const B = 25
  // A must be 50 AND B must be 25. If not return false 
  const truthyFunction = (A, B) => {
    if (A, B) {
      return true
    }
    else {
      return false
    }
  }
  // To call function: truthyFunction(A,B);





// Write a JavaScript program that runs when 1 of 2 things are true.

  const oneOfTwoFunction = () => {

  }

// Write a JavaScript program that runs when both things are not true.  

  const neitherOfTwoFunction = () => {

  }
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24