var http = require('http');

http.createServer(function (request,response) {
	/* body... */
	console.log(request)
	response.writeHead(200,{'Content-Type':'application/json'})
	response.end('hello world')
}).listen(3030);

