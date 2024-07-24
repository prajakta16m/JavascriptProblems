/* RUN IN JSFIDDLE

  We have a deep nested object comprising of string, number, object or array values. Create a new array that has all the values only from this deep nested object. Example -
  output: ['value1', 'value3', 'value5', 'value6', 8, true]
*/

// The module path to fiddles accepts all the common variations:
//
// - @jsfiddle/[fiddle].js
// - @jsfiddle/[user]/[fiddle].js
// - @jsfiddle/[user]/[fiddle]/[version].js
// - @jsfiddle/[user]/[fiddle]/latest.js
//
// You need to remember to add `.js` at the end.

import FiddleModule from "@jsfiddle/rLd4uyep.js"

let message = FiddleModule.greet("Hello world")

let _deepNestedObj = {
 
  'attr1': 'value1',
  'attr2': {
  	'attr3': 'value3'
  },
  'attr4': [
  	'value5',
    {
    '	attr5': 'value6'
    },
    {
    '	keyattr7': 8
    },
    {
    '	keyattrbool': true
    }
  ]
 
}

let result = [];

function add(obj){
  for(const [key, value] of Object.entries(obj) ){
  
    if(typeof value != "object"){
    	result.push(value);
      console.log(value);
    } else {
    	add(value);
    }
  }
}


 add(_deepNestedObj);

document.querySelector("p").innerHTML = result;
