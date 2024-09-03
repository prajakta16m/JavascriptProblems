/*
JavaScript is a dynamically typed language, which means the types of variable can be changed during runtime. 
Many interview questions involve recursion of values that contain values of different types and how to handle each value type differs according to the type 
(e.g. different code is needed to iterate over an array vs an object). 
Knowledge of handling the JavaScript types is crucial to solving questions like
*/

export function isBoolean(value) {
  return (typeof value == 'boolean') ? true : false;
}

export function isNumber(value) {
  return (typeof value == 'number') ? true : false;
}

export function isNull(value) {
  return (value == null) ? true : false;
}

export function isString(value) {
  return (typeof value == 'string') ? true : false;
}

export function isSymbol(value) {
  return (typeof value == 'symbol') ? true : false;
}

export function isUndefined(value) {
  return (typeof value == 'undefined') ? true : false;
}
