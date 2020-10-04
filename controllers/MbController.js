const Member = require('../models/mb')

const {mongooseToObject} = require('../unti/mongoose')


class MbController {
    
    //[GET] /me/done/ce
    donece(req,res) {
        res.render('mb.hbs')
    }
    //[POST] /me/done/de //khong dc

    donede(req,res) {
        // res.json(req.body)
        const member = new Member(req.body)
        Member.save()
             .then( ()=> res.redirect('/'))
             .catch(error => {
 
             })
     }

}

module.exports = new MbController()