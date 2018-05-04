let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	let filePath = event.queryStringParameters.filePath;
	let email = event.queryStringParameters.email;
	let image = event.queryStringParameters.image;
	let response = {
		body: "",
		statusCode: 200,
		isBase64Encoded: false
	}


	// ddb.scan({
	// 	TableName: 'userDetails',
	// 	ExpressionAttributeValues: {
	// 		':email': email
	// 	},
	// 	FilterExpression: 'email = :email'
	// }, function (err, data) {
	// 	if (err) {
	// 		//handle error
	// 		console.log("data");
	// 		response.body = JSON.stringify(err);
	// 		callback(response, null);
	// 	} else {
	// 		console.log("Success");
	// 		response.body = JSON.stringify(data);
	// 		// callback(null, response);
	// 		//your logic goes here
	// 	}

	// });
	// s3.getObject({
	// 	'Bucket': "userdetail.s3.bucket",
	// 	'Key': filePath
	// }).promise()
	// 	.then(data => {
	// 		console.log(data);           // successful response
	// 		/*
	// 		data = {
	// 			AcceptRanges: "bytes", 
	// 			ContentLength: 3191, 
	// 			ContentType: "image/jpeg", 
	// 			ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
	// 			LastModified: <Date Representation>, 
	// 			Metadata: {...}, 
	// 			TagCount: 2, 
	// 			VersionId: "null"
	// 		}
	// 		*/

	// 		response.body = JSON.stringify(data);
	// 		// callback(null, response);

	// 	})
	// 	.catch(err => {
	// 		response.body = JSON.stringify(err);
	// 		console.log(err, err.stack); // an error occurred
	// 		// callback(response, null);
	// 	});



	callback(null, 'Successfully executed');
}