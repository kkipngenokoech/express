# EXPRESS

the purpose of this application is to help me understand about the express framework

1. understand Express
2. Page routes and views
3. Adding layouts
4. Nodemailer contact form.

## EXPRESS FRAMEWORK

it is a full framework and also a web server.

to install this framework you: `npm install -g express` - this installs express globally.

## BODY PARSER

this allows us to parse incoming request body into different formats such as JSON, URL-encoded and raw.

body parser is going to extract data from the request body and convert it into a usable format for my application.

`app.use(bodyParser.urlencoded({extended: false}));` - this is used to parse incoming request bodies that are URL-encoded.(name=John+Doe&email=john.doe%40example.com&age=30)

The bodyParser.urlencoded() middleware parses this type of data and creates a req.body object with the parsed data. The extended option is set to false, which means that the URL-encoded data can only contain string and array data. If you set the extended option to true, the URL-encoded data can also contain nested objects.
