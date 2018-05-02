let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	let email = event.email;

	ddb.scan({
		TableName: 'userDetails', ExpressionAttributeValues: { ':email': email }
	}, function (err, data) {
		if (err) {
			//handle error
			console.log("data");
		} else {
			console.log("Success");
			//your logic goes here
		}
	});
	s3.putObject({
		"Body": email,
		"Bucket": "newuserdetail",
		"Key": email
	})
		.promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
				VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}