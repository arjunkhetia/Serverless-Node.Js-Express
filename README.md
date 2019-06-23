# Serverless Node.Js-Express Project   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Serverless (Node.Js + Express) for AWS Lambda, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Serverless-Node.Js-Express.git
```

# AWS Serverless Express

Run serverless applications and REST APIs using your existing Node.js application framework, on top of AWS Lambda and Amazon API Gateway. The sample provided allows you to easily build serverless web applications/services and RESTful APIs using the Express framework.

Package and create your Lambda function, then configure a simple proxy API using Amazon API Gateway and integrate it with your Lambda function.

```js
'use strict'
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log('Events : ' + JSON.stringify(event));
  awsServerlessExpress.proxy(server, event, context);
}
```

## Create the deployment package

The deployment package is a ZIP file that includes both your custom JavaScript code and any dependencies that your code needs to run. The root level of the ZIP file contains any custom JavaScript code you've written, plus a directory called node_modules. Inside the node_modules directory is all the dependencies your code needs. You can upload the package directly to Lambda, or you can use an Amazon S3 bucket, and then upload it to Lambda. If the deployment package is larger than 50 MB, you must use Amazon S3.

## Upload the deployment package

1) Log into the AWS Console, and then click on Lambda from computer services.
2) Click Create a Lambda function from scratch.
3) In basic information -> Enter Function name & Runtime -> Node.js 10.x.
4) Under Lambda function code, choose upload a ZIP file, and then click the Upload button. Upload your deployment ZIP.
5) Under handler, enter the file-name where we exports our handler value -> lambda.handler.
6) In Execution role -> Create a new role from AWS policy templates.
7) In Basic settings, Memory (MB) -> 128 MB & Timeout -> 20 sec.
8) When you're done, click on Save button.

## API Gateway

We need to setup an API Gateway instance that handles the API calls. Go back to the AWS Console page, and search for and click on API Gateway.

1) Click on Create API, and Choose the protocol -> REST, Create new API -> New API & Settings enter a name for new API.
2) Click on Actions -> Create Resource -> check Configure as proxy resource & check for Enable API Gateway CORS.
3) Click on create resource.
4) Then on next screen will ask you for Lambda Function just write the created function name.
5) Click on save.

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
