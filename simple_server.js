var express = require('express');
var app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello', function (req, res) {
    res.end({hello : "world"})
})

app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

