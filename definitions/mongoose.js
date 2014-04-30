// $ sudo npm install -g mongoose

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/site1');

global.mongoose = mongoose;