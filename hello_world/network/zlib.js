var http = require('http');
var zlib = require('zlib');

http.createServer(function (request,response) {
	var i = 1024,data = '';

	console.log(request.headers)

	while (i--) {
		data += '123,';
	}

	if((request.headers['accept-encoding']).indexOf('gzip') !== -1){
		// 压缩 http 响应体数据
		zlib.gzip(data,function (err,data) {
			response.writeHead(200,{
				'Content-Type':'text/plain',
				'Content-Encoding':'gzip'
			});
			response.end(data);
		});

	}else{
		response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end(data);
	}
}).listen(3030)

