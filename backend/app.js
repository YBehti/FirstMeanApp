const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');
const path = require('path');





app.use(bodyParser.json());
app.use('/image',express.static(path.join(__dirname,'image')));
app.use('/',express.static(path.join(__dirname,'angular')));





app.use((req,res,next)=>{
 res.setHeader('Access-Control-Allow-Origin','*');

 res.setHeader('Access-Control-Allow-Headers',
 'Origin,X-Requested-With,Content-Type,Accept,Authorisation');

 res.setHeader('Access-Control-Allow-Methods',
 'GET,POST,PUT,OPTIONS,DELETE,PATCH');

 next();
});

mongoose.connect(
  'mongodb+srv://youssef:'+ process.env.MONGO_ATLAS_PSW +'@cluster0-qwwhz.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
   }
  )
.then(()=>{
  console.log('Connected to DB');

})
.catch(()=>{
  console.log('Connection failed');

})

app.use('/app/posts',postsRoutes);
app.use('/app/users',usersRoutes);
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,"angular","index.html"));
})


module.exports = app;
