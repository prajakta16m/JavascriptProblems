let a;
var b;

for(var i=0; i<5; i++){
    a = i;
    b = i;
    setTimeout(()=>{
        console.log("i "+i);
        console.log("a&b = "+a,b);
    },1000);
}

/* OUTPUT:
    i 5
    a&b = 4 4
    i 5
    a&b = 4 4
    i 5
    a&b = 4 4
    i 5
    a&b = 4 4
    i 5
    a&b = 4 4   
*/

let a;
var b;

for(let i=0; i<5; i++){
    a = i;
    b = i;
    setTimeout(()=>{
        console.log("i "+i);
        console.log("a&b = "+a,b);
    },1000);
}

/* OUTPUT - desired output. for loop var need to be 'let' scoped 
    i 0
    a&b = 4 4
    i 1
    a&b = 4 4
    i 2
    a&b = 4 4
    i 3
    a&b = 4 4
    i 4
    a&b = 4 4
*/

  
