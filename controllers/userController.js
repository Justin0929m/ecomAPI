// This is for the signup and login process, so here we will get the user inputs (names, email address, password, and other fields if needed). Once we gather the information we will then check the database to see if the user exists or not and if not we will then proceed to hashing the password and storing the newly created user along with the hashed password in the database

const { hash, compare } = require("bcrypt");
const Users = require("../models/userModel");
const { createToken } = require("../middleware/AuthenticateUser");

const register = {
  register: async function (req, res) {
    const { firstName, lastName, gender, emailAdd, userPass, profileUrl } =
      req.body;

    try {
      const existingUser = await Users.findUserByEmail.findUserByEmail(emailAdd);

      if (existingUser) {
        return res.status(400).json({
          msg: "A user with this email already exists",
        });
      }

      const hashedPassword = await hash(userPass, 10);

      const user = {
        firstName,
        lastName,
        gender,
        emailAdd,
        userPass: hashedPassword,
        profileUrl,
      };

      await Users.createUser.createUser(user);

      const token = createToken(user);

      res.status(201).json({
        token,
        msg: "Account successfully created",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  },
};

const login = {
    login: async function(req, res){
        const { emailAdd, userPass } = req.body
        try {
            const fetchUser = await Users.findUserByEmail.findUserByEmail(emailAdd)
            
            if(fetchUser === undefined){
                res.status(400).json({
                    msg: "Incorrect email or email doesn't exist",
                });
            }
            
            const passwordMatch = await compare(userPass, fetchUser.userPass)
            if (!passwordMatch) {
              res.status(400).json({
                msg: "Incorrect password",
              });
            }

            const token = createToken({
                emailAdd,
                userPass
            })

            res.cookie('jwt', token, {
                maxAge: 900000,
                httpOnly: true
            })

            res.status(200).json({
                msg: 'Login Successfully',
                token,
                fetchUser
            })
            
            
        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    }
}

const logout = {
    logout: function(req, res){
        res.cookie("jwt", '');

        res.json({
            msg: 'Logout Successfully'
        })
    }
}

module.exports = {register, login, logout}

