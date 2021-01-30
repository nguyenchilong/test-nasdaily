
const mongoose = require('mongoose');
require('dotenv').config();

// connect to mongodb
mongoose.connect(`${process.env.DB_DNS}`, { 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;
