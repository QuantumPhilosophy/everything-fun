'use strict'

const db = require('../models')
var isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function (app) {
  // Load strains page to view all strains
  app.get('/strains', isAuthenticated, function (req, res) {
    db.strain.findAll({}).then(function (strains) {
      res.render('strains', {

      })
    })
  })

  // Load bevs page to view all bevs
  app.get('/bevs', isAuthenticated, function (req, res) {
    db.strain.findAll({}).then(function (strains) {
      res.render('bevs', {

      })
    })
  })
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/members', isAuthenticated, function (req, res) {
    db.strain.findAll({}).then(function (strainsData) {
      console.log('------------------------------------')
      console.log('strainsData', strainsData)
      console.log('------------------------------------')
      res.render('members', {
        strains: strainsData
      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
