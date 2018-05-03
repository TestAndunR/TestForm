let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	let name = event.name;

	console.log(name);
	s3.deleteObject({
		'Bucket': "userdetail.s3.bucket",
		'Key': name
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			console.log("Successfully deleted");
			/*
				data = {}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});

	callback(null, 'Successfully executed');
}