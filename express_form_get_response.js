var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/express_form_get.html', function (req, res) {
   res.sendFile( __dirname + "/" + "express_form_get.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})