var express = require('express'),
     bodyParser = require('body-parser'),
     session = require('express-session'),
     cors = require('cors'),
     sessionConfig = require('./config/session'),
     app = express(),
     corsOptions = {
       origin: 'http://localhost:8030'
     },
     port = 8030;

console.log(__dirname);
app.use(express.static(__dirname + '/public'));
app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(cors(corsOptions));

require('./routes/routes')( app );

app.listen(port, function(){
  console.log('listening on ' + port);
});
