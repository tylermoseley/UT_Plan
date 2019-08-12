// Mongoose setup
let mongoose = require('mongoose');
const server = 'localhost'; // REPLACE WITH YOUR DB SERVER
const database = 'UTPlan';      // REPLACE WITH YOUR DB NAME
class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}
module.exports.db = new Database()

let NodeSchema = new mongoose.Schema({
    key:    String,
    dept:   String,
    number: String,
    title:  String,
    req:    Number,
    color:  String,
    hours:  Number,
    desc:   String
});

let LinkSchema = new mongoose.Schema({
    to:     String,
    from:   String
});

module.exports.Nodes = mongoose.model('Node', NodeSchema)
module.exports.Links = mongoose.model('Link', LinkSchema)
