let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	ddb.delete({
		TableName: 'userDetails',
		Key: { 'email': email }
	}, function (err, data) {
		if (err) {
			//handle error
			console.log("Error occured in deleting the query");
		} else {
			//your logic goes here
			console.log("Succeed in deletion");
		}
	});
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