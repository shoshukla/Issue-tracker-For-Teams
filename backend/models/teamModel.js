const { Schema } = require ('mongoose');
const { model,schema} = require ('../connection');
 const mySchema = new schema({
    title:String,
    members: String,
    createdAt:Date
 })
 module.exports =('userscollection',mySchema);