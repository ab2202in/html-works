const jwt = require('jsonwebtoken');
const users = require('../db/models/users');
let success_function = require('./response_handler').success_function;
let error_function = require('./response_handler').error_function;

exports.logout = function (req, res){
    
}