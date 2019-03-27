var express = require('express')
var app = express()
 

// hit this end point to RETRIEVE OUR ENTIRE BLOCKCHAIN
app.get('/blockchain', function (req, res) {
  
});


// hit this end point to CREATE NEW TRANSACTIONS
app.post('/transaction', function(reg, res) {

});

// hit this end point to mine. It will MINE OR CREATE NEW BLOCK for us
app.get('/mine', function(req, res) {

});
 
app.listen(3000, function(){
    console.log('Listening on port 3000...');
});