# response-powered-by
### Middleware to set or remove the X-Powered-By header returned by Express

This middleware sets or removes the X-Powered-By header on HTTP responses served by [Express](http://expressjs.com/) framework.

X-Powered-By key header specifies the technology supporting a web application. This header is used to gather metrics about the web.

#### Installation
If you want use response-powered-by you have to install it. There are two methods for that:
In your package.json add the following item: 

response-powered-by: "version"

then digit **npm install**

**Example**:

response-powered-by: "*" for the latest version

response-powered-by: "1.0.0" for the version 1.0.0

**OR**

launch this command:

**npm  response-powered-by --save**
