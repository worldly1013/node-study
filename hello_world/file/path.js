const path = require('path');
var cache = {};


// path.normalize   路径格式化
function store (key,value) {
	cache[path.normalize(key)] = value;
}

store('foo/bar',1)
store('foo//baz//bar',2)
console.log(cache);

// path.join 路径拼接
console.log(path.join(''))
console.log(path.join('foo','bar','/aa','bb'))
console.log(path.join('/foo','bar','aa/bb','cc'))
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// path.extname  path 的扩展名
var htmlExt = 'index.html';
var jsExt = '.js'
htmlExt = path.extname(htmlExt)
jsExt = path.extname(jsExt)

console.log(htmlExt)
console.log(jsExt)