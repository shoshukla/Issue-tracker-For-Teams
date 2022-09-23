const { model,Schema} = require ('../connection');
 const mySchema = new Schema({
    title:String,
    members: String,
    createdAt:Date
 })
 module.exports = model('teamcollection',mySchema);