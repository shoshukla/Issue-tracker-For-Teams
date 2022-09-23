// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const issueRouter = require('./routers/issueRouter');
const cors = require('cors');

// initialising express

const app=express();

const port=5000;

// this will parse JSON data to javascript
app.use(express.json());
app.use(cors( {origin : ['http://localhost:3000']} ));

// middleware
app.use('/user',userRouter);
app.use('/issue',issueRouter);

// route
app.get('/',(req,res) => {res.send('Response From Express');
})

//route or endpoint 
app.get('/home',(req,res) => {
    res.send('Response From Home');
})

app.listen(port,() => {
    console.log('server has started');
});