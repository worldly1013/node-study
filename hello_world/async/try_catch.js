function async(fn,callback) {
	/* body... */
	setTimeout(function () {
		callback(fn());
	},0)
}

try{
	async(null,function (data) {
		/* body... */

	})
} catch(err) {
	console.log('Error:%s',err.message)
}