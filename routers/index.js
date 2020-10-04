 const path = require('path')
 const spRouter = require('./sp')
 const meRouter = require('./me')
 const mbRouter = require('./mb')
 function router(app){
    app.use('/:slug', spRouter)
    app.use('/me', mbRouter)
    app.use('/buy',meRouter)
 }

 module.exports = router