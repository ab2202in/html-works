const jwt = require('jsonwebtoken');
const users = require('../db/models/users');
let success_function = require('./response_handler').success_function;
let error_function = require('./response_handler').error_function;

exports.checkLogin = async function (req, res, next) {
    try {

        let token = req.headers['authorization'].split('')[1];
        console.log("token :", token);

        if (!token) {
            let response = error_function({
                statusCode: 400,
                message: "Token is required",
            });
            res.status(response.statusCode).send(response);
            return;

        } else {
            jwt.verify(token, process.env.PRIVATE_KEY, async function(err, decoded){
                if(err){
                    let response = error_function({
                        statusCode: 400,
                        message: err.message?err.message:err,
                    });
                    res.status(response.statusCode).send(response);
            return;
                }else{
                    
               
            
            let user_id = decoded.user_id;

            let user = await users.findOne({ _id: user_id });

            if (user) {
                req.user_id = user_id;
                next();
            } else {
                let response = error_function({
                    statusCode: 404,
                    message: "Login user not found",
                });
                res.status(response.statusCode).send(response);
                return;
            }
        }
})
        }
    } catch (error) {
        console.log('error : ',error);
        let response = error_function({
            statusCode : 400,
            message : "something went wrong! Please try again",
        });
        res.status(response.statusCode).send(response);
        return;

    }

}