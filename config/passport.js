const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

//------------ Local User Model ------------//
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            //------------ User Matching ------------//
            User.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'This email ID is not registered' });
                }

                //------------ Password Matching ------------//
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect! Please try again.' });
                    }
                });
            });
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};/*

const Admin = require('../models/Admin');

module.exports = function (passport2) {
    passport2.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            //------------ User Matching ------------//
            Admin.findOne({
                email: email
            }).then(admin => {
                if (!admin) {
                    return done(null, false, { message: 'This email ID is not registered' });
                }

                //------------ Password Matching ------------//
                bcrypt.compare(password, admin.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, admin);
                    } else {
                        return done(null, false, { message: 'Password incorrect! Please try again.' });
                    }
                });
            });
        })
    );

    passport2.serializeUser(function (admin, done) {
        done(null, admin.id);
    });

    passport2.deserializeUser(function (id, done) {
        Admin.findById(id, function (err, admin) {
            done(err, admin);
        });
    });
};*/