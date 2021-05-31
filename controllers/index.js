const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoute')
const dashboardRoutes = require('./dashboardRoute')

router.use('/', homeRoutes) 
router.use('/api', apiRoutes) 
router.use('/dashboard', dashboardRoutes) 

module.exports = router