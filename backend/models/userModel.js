const { Schema } = require ('mongoose');
const { model,schema} = require ('../connection');
 const mySchema = new schema({
    username:String,
    email : String,
    Password :String,
    Age:Number
    

 })
 module.exports =('userscollection',mySchema);