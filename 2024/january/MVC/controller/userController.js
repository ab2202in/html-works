const users = require('../db/models/users');
const success_function = require('../utils/response_handler').success_function;
const error_function = require('../utils/response_handler').error_function;
const bcrypt = require('bcrypt')


async function createUser(req, res) {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

        //validate
        let userFound =await users.findOne({email});

        if(userFound){
            let response =error_function({
                statusCode : 400,
                message : "User already exists",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        //Hashing password
        let salt = await bcrypt.genSalt(10);

        let hash_passed = bcrypt.hashSync(password, salt);

        //save to database
        let new_user =await users.create({
            name,
            email,
            password: hash_passed,
        });

        if (new_user) {
            let response_datas = {
                  _id : new_user._id,
                  name : new_user.name,
                  email : new_user.email,
      
                }
            let response =success_function({
                statusCode : 201,
                data : response_datas,
                message : "user created successfully"
            })
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response =error_function({
                statusCode : 400,
                message : "user creation failed"
            })
            res.status(response.statusCode).send(response);
            return;
        }

    } catch (error) {
        console.log("error : ", error);
        let response =error_function({
            statusCode : 400,
            message : "something went wrong"
        })
        res.status(response.statusCode).send(response);
        return;
    }

}


async function getUserData(req, res) {

    try {
        // Fetch all users from the database
        let allUsers = await users.find({});

        if (allUsers.length > 0) {
            // Users found, send success response
            let response = success_function({
                statusCode: 200,
                data: allUsers,
                message: "All users retrieved successfully",
            });
            res.status(response.statusCode).send(response);
        } else {
            // No users found, send appropriate response
            let response = error_function({
                statusCode: 404,
                message: "No users found",
            });
            res.status(response.statusCode).send(response);
        }
    } catch (error) {
        console.log("error : ", error);
        // Handle any unexpected errors
        let response = error_function({
            statusCode: 500,
            message: "Internal server error",
        });
        res.status(response.statusCode).send(response);
    }
}

async function updateUser() {

}

async function deleteUser() {

}

module.exports = {
    createUser,
    getUserData,
    updateUser,
    deleteUser,
}