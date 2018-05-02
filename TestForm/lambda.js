let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	email = event.email
	username = event.name;
	phone = event.phone;
	address = event.address;
	ddb.put({
		TableName: 'userDetails',
		Item: { 'username': username, 'email': email, 'address': address, 'phone': phone }
	}, function (err, data) {
		if (err) {
			console.log("Details coould not be entered");
		} else {
			//your logic goes here
			console.log(data)
			console.log("Details entered succesfully");
		}
	});
	s3.putObject({
		"Body": username,
		"Bucket": "userbucket",
		"Key": username
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