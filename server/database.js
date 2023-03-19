const mongoose = require('mongoose');

const URI ='mongodb://localhost/gContenidodb';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.console.error(err));
module.exports = mongoose;