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




	callback(null, 'Successfully executed');
}