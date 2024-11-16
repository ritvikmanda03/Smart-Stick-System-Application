// const awsServerlessExpress = require('aws-serverless-express');
// const app = require('./app');

// /**
//  * @type {import('http').Server}
//  */
// const server = awsServerlessExpress.createServer(app);

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = (event, context) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
// };

// hehe

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

// const tableName = process.env.STORAGE_ITEMSTABLE_NAME;
const tableName = "newTable";

exports.handler = async (event) => {
    const method = event.httpMethod;
    const body = event.body ? JSON.parse(event.body) : null;

    try {
        if (method === 'POST') {
            const newItem = {
                id: body.id,  // Ensure the item contains the primary key
                name: body.name,
                description: body.description,
            };

            await docClient.put({ TableName: tableName, Item: newItem }).promise();
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Item added', newItem }),
            };
        }

        if (method === 'GET') {
            const data = await docClient.scan({ TableName: tableName }).promise();
            const sortedItems = data.Items.sort((a, b) => b.entry - a.entry);
            return {
                statusCode: 200,
                body: JSON.stringify(sortedItems),
            };
        }

        return { statusCode: 400, body: 'Unsupported method' };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
