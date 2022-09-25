
const { model,Schema} = require ('../connection');
 const mySchema = new Schema({
    title:String,
    description: String,
    category :String,
    assignedby:String,
    assignedto:String,
    status:{type : String, default : 'Pending'},
    team:String,
    createdAt:Date
 })
 module.exports = model('issuecollection',mySchema);