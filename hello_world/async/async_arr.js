
var dateUtil = require('../util/date.js')


// 异步遍历数组  ---->  串行处理  
;(function next(i,arr,callback) {
	var len = arr.length;

	if(i < len){		
		async(arr[i],function () {
			next(i + 1,arr,callback)
		});
	}else{
		callback();
	}

}(0,[1,2,3],function () {
	console.log('数组遍历完成')
}))

function async(value,callback) {
	setTimeout(function () {
		callback()
		console.log(value)
		console.log(dateUtil.formatDate(new Date()))
	},5000)
}


// 异步遍历数组  ---->  并行处理  ---->  待所有并行结果返回后 -----> 统一返回结果
;(function (i,arr,count,callback) {
	var len = arr.length;

	for(; i < len; i++){ 
		;(function (i) {
			async(arr[i],function () {
				if(count++ === len){
					callback()
				}
			});
		}(i));
	}
}(0,[1,2,3],0,function () {
	console.log('数组遍历完成')
}))

