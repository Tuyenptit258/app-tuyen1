
 const Produce = require('../models/produce')
const {a} = require('../unti/mongoose')


class spController {
    // show(req,res,next) {
        
    //    // res.send('Ban qua dep trai luon - '+ req.params.slug )
    //     Produce.findOne({ slug: req.params.slug })
    //         .then(produce =>
    //                 res.render('sp.hbs',{produce: mongooseToObject(produce)})
    //         )
    //         .catch(next)
    // }
    //[GET]
    async creatme(req,res,next) {
        Produce.find({})
            .then(produces  => res.render('forme.hbs',{
                produces: a(produces)
            }))
            .catch(next)
    }
    
    //[POST]
    
    //[GET again]
    creatagain(req,res,next) {
        Produce.findDeleted({})
        .then(produces  => res.render('trashme.hbs',{
            produces: a(produces)
        }))
        .catch(next)
    }


    //Put
    

}

module.exports = new spController()