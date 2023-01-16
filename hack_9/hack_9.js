/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

let h = arr.filter(i => i.charAt(0) === 'b' );

result = h.length;


//export result
module.exports = result;