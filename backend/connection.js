const mongoose = require('mongoose');
const databaseName='issuetracker'
const url=`mongodb+srv://shobhitshukla906:Reenashukla1@cluster0.5z4hybd.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
 

mongoose.connect(url)
.then((result) => {
    console.log('Connected to Database');
})
.catch((error) => {
    console.log(err);
})

module.exports=mongoose;