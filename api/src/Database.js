const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/app_edu', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})