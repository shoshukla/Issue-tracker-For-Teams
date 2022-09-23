
const { model,Schema} = require ('../connection');
 const mySchema = new Schema({
    title:String,
    description: String,
    category :String,
    assignedby:String,
    assignedto:String,
    team:String,
    createdAt:Date
 })
 module.exports = model('issuecollection',mySchema);