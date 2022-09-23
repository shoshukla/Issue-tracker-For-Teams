const { model,Schema} = require ('../connection');
 const mySchema = new Schema({
    username:String,
    email : String,
    Password :String,
    Age:Number
    

 })
 module.exports = model('userscollection',mySchema);