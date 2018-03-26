var fs = require('fs'),
	path = require('path'),
	http = require('http');

var MIME = {
	'.css':'text/css',
	'.js':'application/javascript'
}
	
// 合并文件内容
function combineFiles(pathnames,callback) {
	/* body... */
	var output = [];

	;(function next(i,len){
		if(i < len){
			fs.readFile(pathnames[i],function (err,data) {
				/* body... */
				if(err){ 
					callback(err) 
				}else{
					output.push(data);
					next(i + 1,len)
				}

			})
		}
	})(0,pathnames.length);
}


// 功能入口函数
// 解析配置文件  创建服务器
function main(argv) {
	var config = fs.readFileSync(argv[0],'utf-8'),
		root = config.root || '.',
		port = config.port || 80;

	http.createServer(function (request,response) {
		var url = '/Users/ly/Documents/node/hello/async/async_arr.js'
		var urlInfo = parseURL(root,url);
	
		combineFiles(urlInfo.pathnames,function (err,data) {
			/* body... */
			if(err){
				response.writeHead(404);
				response.end(err.message);
			}else{
				response.writeHead(200,{
					'Content-Type':urlInfo.mime
				})
				response.end(data);
			}
		})	
	}).listen(3030);
}


/**
 *                            	href
 *	 -----------------------------------------------------------------
 *	                            host              path
 *	                      --------------- ----------------------------
 *	 http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
 *	 -----    ---------   --------   ---- -------- ------------- -----
 *	protocol     auth     hostname   port pathname     search     hash
 *	                                                ------------
 *	                                                   query 
 */                               
function parseURL(root,url) {
	var base,pathnames,parts;
	var path = require('path');

	console.log(url)
	// var url = 'http://assets.example.com/foo/??bar.js,baz.js'

	if(url.indexOf('??') === -1){
		url = url.replace('/','/??');
	}	

	parts = url.split('??');
	base = parts[0];


	pathnames = parts[1].split(',').map(function(value){
		return path.join(root,base,value);
	})

	return {
		mime:MIME[path.extname(pathnames[0])] || 'text/plain',
		pathnames:pathnames
	};
}

console.log(process.cwd())
console.log(__dirname)
console.log(process.execPath)

main(process.argv.slice(2));











