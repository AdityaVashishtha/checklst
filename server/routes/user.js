const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/", (req, res) => {
    let userBody = req.body;
    let query = {
        username: userBody.username
    };
    User.findOne(query, (err, user) => {
        if (!err) {
            if (user) {
                bcrypt.compare(userBody.password, user.password, (err, result) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    }
                    if (result) {
                        let token = jwt.sign({
                            username: user.username
                        }, "dummy-secret", {
                            expiresIn: "24h"
                        });
                        res.json({
                            msg: "Auth Done",
                            username: user.username,
                            token: token
                        });
                    } else {
                        res.status(401).json({
                            msg: "Auth Failed"
                        })
                    }
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            username: userBody.username,
                            password: hash
                        });
                        user.save().then(result => {
                            console.log(result);
                            let token = jwt.sign({
                                username: user.username
                            }, "dummy-secret", {
                                expiresIn: "24h"
                            });
                            res.json({
                                msg: "Auth Done",
                                username: user.username,
                                token: token
                            });
                        }).catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });
                    }
                });
            }
        } else {
            res.status(500).json();
        }
    });
});

module.exports = router;