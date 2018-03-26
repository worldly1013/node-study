var fs = require('fs');

function copy (src,dist) {
	fs.writeFileSync(dist,fs.readFileSync(src));
}

function main (argv) {
	var a = '/Users/ly/Documents/node/hello/file/aa.js'
	var b = '/Users/ly/Documents/node/hello/file/bb.js'

	copy(a, b);
	// copy(argv[0], argv[1]);
}



main(process.argv.slice(2));