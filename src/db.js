// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kumaresh', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("Connected Boy"))
.catch((e)=>console.log(`${e} is the error`));


