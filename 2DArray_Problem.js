/*
  Given no. of rows and columns, print 2D array with numbers in zigzag pattern
*/
let rows=5;
var cols=3;

let a = [];
for(let i=0;i<rows;i++){
    a[i] = ((i+1)%2==0) ? cols*(i+1) : (cols*i)+1;
}
console.log(a);
for(let i=0;i<cols-1;i++){
   
    for(let i=0;i<rows;i++){
        a[i] = ((i+1)%2==0) ? a[i]-1 : a[i]+1;
    }
    console.log(a);
}

/*
  OUTPUT:
    [ 1, 6, 7, 12, 13 ]
    [ 2, 5, 8, 11, 14 ]
    [ 3, 4, 9, 10, 15 ]  

    [ 1, 8, 9, 16 ]
    [ 2, 7, 10, 15 ]
    [ 3, 6, 11, 14 ]
    [ 4, 5, 12, 13 ]
*/
