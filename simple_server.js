var express = require('express');
var app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send("hello")
})

app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

