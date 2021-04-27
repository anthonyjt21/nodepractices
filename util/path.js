var path = require('path');

// find the first module to be loaded
var topModule = module;

while(topModule.parent)
  topModule = topModule.parent;

var appDir = path.dirname(topModule.filename);
console.log(appDir);
var appDir2 =path.dirname(process.mainModule.filename);
console.log(appDir2);
module.exports=appDir