let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	let email = event.email
	let username = event.name;
	let phone = event.phone;
	let address = event.address;
	let encodedImage =JSON.parse(event.body).user_avatar;
	let decodedImage = Buffer.from(encodedImage, 'base64');
	var filePath = "avatars/" + username + ".jpg"


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
		"Body": decodedImage,
		"Bucket": "userdetail.s3.bucket",
		"Key": filePath
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