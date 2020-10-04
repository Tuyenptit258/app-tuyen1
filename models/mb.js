const mongoose = require('mongoose');

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mbSchema = new Schema({
    name: {type: String, maxlength: 255},
    age : {type:String, maxlength:255},
    address: {type:String, maxlength:255},
    email: {type:String, maxlength:255},
    phone: {type:String, maxlength:255},
    slug: {type:String, maxlength:255},
    creatAt :{type:Date, default: Date.now},
    updateAt: {type:Date, default:Date.now}
},{
    
        collation : 'mb'
    })


const mbModel = mongoose.model('mb', mbSchema)


module.exports = mbModel