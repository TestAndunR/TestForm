let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	let searchDate = event.queryStringParameters.date;
	let response = {
		body: "",
		statusCode: 200,
		isBase64Encoded: false
	}

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
	

	callback(null, 'Successfully executed');
}