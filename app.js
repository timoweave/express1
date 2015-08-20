var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.get('/', function(request, response) {
    response.render('index', {title: "Survey"});
});

app.post('/result', function(request, response) {
    console.log(request.body);
    var data = request.body;
    data.title = "Submitted Information";
    response.render('result', data);
});

app.listen(8000);
console.log('localhost:8000')
