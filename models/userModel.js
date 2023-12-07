const db = require('../config')

const createUser = {
    createUser: async function(user){
        try {
            const query = 'INSERT INTO users SET ?'
            const [result] = await db.query(query, [user])

            return result.insertId
        } catch (error) {
            console.error('There was an error trying to create a profile', error);
            throw error
        }
    }
}

const updateUser = {
    updateUser: async function(){
        try {
            
        } catch (error) {
            
        }
    }
}

// This is to check if the email is already in use

const findUserByEmail = {
    findUserByEmail: async function(emailAdd){
        try {
            const query = 'SELECT userID, firstName, lastName, gender, emailAdd, userPass, profileUrl FROM users WHERE emailAdd = ? '
            const [rows] = await db.query(query, [emailAdd]);

            console.log(rows[0]);
            return rows[0]
        } catch (error) {
            if(!row){
                console.error(error);
            }
        }
    }
}

module.exports = {
    createUser,
    updateUser,
    findUserByEmail,
}
