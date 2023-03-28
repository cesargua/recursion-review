// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // base case(s)
  var firstChar =json[0];
  var lastChar = json[json.length - 1];
  if (firstChar === '"' && lastChar === '"') {
    return json.slice(1, -1);
  }

  // string would start with '"null"'
  // number, boolean, null 'null' 'true' 'false'

};
// '["foo", "bar"'
// '["foo", "bar\\"]'