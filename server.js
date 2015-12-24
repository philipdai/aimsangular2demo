var express = require('express');
var cors = require('cors');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors());
// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(bodyParser.json());

var succMsg = {
    "msg": "Congratulations, you saved successfully."
};

var continueMsg = {
    "msg": "Congratulations, you saved successfully. And please continue operation."
};

app.post('/org-demo-create', function(req, res) {
    console.log(req.body);
	res.status(200).json(succMsg);
});



// app.listen(9001);