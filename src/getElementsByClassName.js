// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, targetNode
) {
  // your code here
  // create an result array
  var array = [];
  // create a variable called element,set it to target Node, and
  var element = targetNode || document.body;
  // base case
  if(element.classList.contains(className)) {
    array.push(element);
  }
  // recursive
  for (var i = 0; i < element.children.length; i++) {
    array = array.concat(getElementsByClassName(className, element.children[i]));
  }
  return array;
};
