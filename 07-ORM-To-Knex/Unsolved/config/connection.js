// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require('mysql');

var Knex = require('knex')(require('../knexfile.js'));


// Export connection
module.exports = Knex
