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

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
