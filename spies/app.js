let db = require('./db');

module.exports.handle_sign_up = (email, password) => {
    //Check if email already exist
    db.save_user({
       email,
       password
    });
    //Send the welcome email
};