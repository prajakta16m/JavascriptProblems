/*
* JS Destructuing object with a default value. Run using w3Schools
*/
const isUserExternal = {
 data: {
   isExternal: true
 }
};

let { data = {isExternal: false} } = isUserExternal;

// Display Primitive Values
document.getElementById("demo").innerHTML = data.isExternal;

/*
* Will be false if data is undefined !
*/
