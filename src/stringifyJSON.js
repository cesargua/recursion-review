// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj,str) {
  // your code goes here
var str = str || '';
//base case: if an invalid input, return undefined or null
//if()

//if not an object, and if number, string, or boolean, return thatbut in string format
if(typeof obj !== 'object'){
  if(typeof obj === 'function' || obj === undefined){
    return undefined;
  }
  if(typeof obj === 'string'){
    return '\"' + obj + '\"'
  }
  else{
    return '' + obj;
  }

} else{
  if(obj === null){
    return 'null';
  } else if(Array.isArray(obj)){
    str += '['
    obj.forEach(function(elem,index){
      str += stringifyJSON(elem);
      if(index < obj.length-1)
        str+= ',';
    })
    str += ']'
  } else {
    str += '{'
    /*obj.forEach(function(elem,index){
      str += stringifyJSON(elem);
      if(index < obj.length-1)
        str+= ',';
    })*/
    var props = Object.keys(obj);

    for(var prop in obj){
      /*if(obj[prop] === 'function' || obj[prop] === undefined){
        continue;
      }*/
      if(stringifyJSON(obj[prop]) === undefined){
        continue;
      }
      str += stringifyJSON(prop)+ ':'
      str += stringifyJSON(obj[prop]);
      if(prop !== props[props.length - 1])
        str+= ',';
    }
    str += '}'
  }
}
//boolean number - ('' + input) '' + true  - 'true'
//string '""'

//if its a pure JSON object, then concat '{'then implement a for loop in the object recurse through the function, whatever gets return, we concatenate the string.when we finish, we concatenate the '}'
//if its an array with .isArray(), then we do the same thing as above, but we first concatenate the '[', anfd the when we finish we concat the ']'
return str;

};
