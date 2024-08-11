// Classic Counter example defining a Closure. Run using jsfiddle.
/* Definition:
    Closure. In JavaScript, functions can be assigned to variables like other data types, can be returned as the result of a function, and can be used inside other functions. 
    A variable defined inside a function is valid only within its
*/

import FiddleModule from "@jsfiddle/rLd4uyep.js"

let message = FiddleModule.greet("Hello world")

document.querySelector("p").innerHTML = message

let add = () => {

	let counter = 0;
  return () => { counter+= 1 ; document.querySelector("p").innerHTML = counter;};
}
document.querySelector("button").onclick = add();
