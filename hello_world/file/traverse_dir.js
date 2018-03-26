// 文件系统
// http://nodejs.cn/api/fs.html#fs_file_system

var fs = require('fs');
var path = require('path');

//  同步查询文件
function syncQuery (dir,callback) {
	console.log(fs.readdirSync(dir))
	fs.readdirSync(dir).forEach( function(file, index) {
		var pathname = path.join(dir,file);
		// 判断时是否为文件夹  若为文件夹则继续遍历查询
		if(fs.statSync(pathname).isDirectory()){
			syncQuery(pathname,callback);
		}else{
			callback(pathname);
		}
	});	 
}

// syncQuery('/Users/ly/Documents/node/hello',function (pathname) {
// 	console.log(pathname)
// })


// 异步查询文件
// node.js 文件系统所有方法都有异步和同步的形式
// 异步方法的最后一个参数都是一个回调函数。 
// 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 
// 如果操作成功完成，则第一个参数会是 null 或 undefined
function query(dir,callback){
	fs.readdir(dir,function  (err,files) {
 
		(function next(i) {
			if(i < files.length){
				var pathname = path.join(dir,files[i]);

				fs.stat(pathname,function (err,stats) {
					if(stats.isDirectory()){
						query(pathname,callback)
					}else{
						callback(pathname,function () {
							next(i+1)
						})
					}
				})
			}else{
				console.log('查询文件完成')
			}
		}(0));
	})
}

query('/Users/ly/Documents/node/hello',function (pathname,callback) {
	console.log(pathname)
	callback()
})




