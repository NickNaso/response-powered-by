# response-powered-by
### Middleware to set or remove the X-Powered-By header returned by Express

This middleware sets or removes the X-Powered-By header on HTTP responses served by [Express](http://expressjs.com/) framework.

X-Powered-By key header specifies the technology supporting a web application. This header is used to gather metrics about the web.

#### Installation
If you want use response-powered-by you have to install it. There are two methods for that:
In your package.json add the following item: 
```json
"response-powered-by": "version"
```
then digit 
```console
npm install
```

**Example**:
```json
"response-powered-by": "*" for the latest version
"response-powered-by": "1.0.0" for the version 1.0.0
```

**OR**

launch this command:
```console
npm install response-powered-by --save
```

#### Use
```javascript
var responsePoweredBy = require('response-powered-by');

//Import some other required modules
var express = require('express');
var app = express();
//Some other configuration for the express app

app.use(responsePoweredBy("Your cutom string for X-Powered-By header"));

```
This middleware sets the X-Powered-By header to a value passed in input, but if that value is not a string or it's **undefined** or **null** this header will be **removed** from the response.
