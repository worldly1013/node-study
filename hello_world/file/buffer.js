var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);

var str = bin.toString('utf-8');

console.log(str)

var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var sub = bin.slice(2);

console.log(sub)