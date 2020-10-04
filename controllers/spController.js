const Produce = require('../models/produce')
const Member = require('../models/mb')
const {mongooseToObject} = require('../unti/mongoose')


class spController {
    show(req,res,next) {
        
       // res.send('Ban qua dep trai luon - '+ req.params.slug )
        Produce.findOne({ slug: req.params.slug })
            .then(produce =>
                    res.render('sp.hbs',{produce: mongooseToObject(produce)})
            )
            .catch(next)
    }
    //[GET]
    creat(req,res,next) {
        res.render('creat.hbs')
    }
    them(req,res,next) {
        res.render('mb.hbs')
    }
    //[POST]
    store(req,res,next) {
       // res.json(req.body)
       const produce = new Produce(req.body)
       produce.save()
            .then( ()=> res.redirect('/'))
            .catch(error => {

            })
    }

    //[GET ] edit /muahang/:id/edit
    edit(req,res,next) {
        Produce.findById(req.params.id)
            .then(produce => res.render('edit.hbs',{
                produce : mongooseToObject(produce)
            }))
            .catch(next)
    }
    //[PUT] /muahang/:id
    sua(req,res,next) {
        // Produce.updateOne({_id: req.params.id}, req.body)
        // .then(() => res.redirect('/buy/for/me') )
        // .catch(next)
      Produce.updateOne({_id: req.params.id}, req.body)
        .then(() =>res.redirect('/buy/for/me') )
        .catch(next)
        
    }

    //[delete]
    destroy(req,res,next) {
        Produce.delete({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }


    forceDestroy(req,res,next) {
        Produce.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[PATCH] //muahang/:id/restore
    suamot(req,res,next) {
        Produce.restore({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
}

module.exports = new spController()