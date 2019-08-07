// join  구분자를 지정해 주어 배열을 문자열로 병합한다.
var path = require('path');

var directories = ['Users', 'Mars', 'docs'];
console.log(directories); // [ 'Users', 'Mars', 'docs' ]

var dirStr = directories.join();
console.log('dir : ' + dirStr); // dir : Users,Mars,docs

var dirStr2 = directories.join(path.sep);
console.log('dir2 : ' + dirStr2); // dir2 : Users\Mars\docs

var dirStr3 = directories.join('^^');
console.log('dir2 : ' + dirStr3); // dir2 : Users^^Mars^^docs