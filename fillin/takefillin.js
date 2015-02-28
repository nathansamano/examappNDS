// load the fillin data
var data = require('./fillin.js');

console.log(typeof data);
console.log(data.length);
var oneRec = data[0];
data.forEach(function(entry) {
  console.log(entry.text);
  if (entry.values.length > 1) 
	// punt for now
     console.log('Found multi-element array');
   else
     console.log(entry.values);
   });

