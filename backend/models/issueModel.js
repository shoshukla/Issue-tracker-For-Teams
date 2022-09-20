const { Schema } = require ('mongoose');
const { model,schema} = require ('../connection');
 const mySchema = new schema({
    title:String,
    description: String,
    Category :String,
    assignedby:String,
    assignedto:String,
    team:String,
    createdAt:Date
 })
 module.exports =('userscollection',mySchema);