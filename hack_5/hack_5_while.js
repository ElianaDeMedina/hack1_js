/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
i=1;
while(i<=7){
    result.unshift(i);
    i+=2;
}

//export result
module.exports = result;