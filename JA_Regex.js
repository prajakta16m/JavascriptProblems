/*
* JS email id verification example. Run in https://onecompiler.com/javascript/437ygkm3q
*/

const regEx = /^\w+([\.+,=?!\^#$%/{}'*~|\&-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g

const result = regEx.test("phai+1@iodinesoftware.com")

console.log(result)
