const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

const mongoose_delete = require('mongoose-delete')
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema
const produceSchema = new Schema({
  name: { type: String, maxlength: 255 },
  decreption: { type: String, maxlength: 255 },
  image: { type: String, maxlength: 255 },
  video: { type: String, maxlength: 255 },
  rate: { type: String, maxlength: 255 },
  slug: { type: String, slug: 'name', unique: true, },
  creatAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }

})

//add plugin

mongoose.plugin(slug)
produceSchema.plugin(mongoose_delete,{
  deletedAt: true,
  overrideMethods: 'all'})





const produceModel = mongoose.model('produce', produceSchema)


module.exports = produceModel