const express = require("express");
const router = express.Router();
const {
    validationResult
} = require("express-validator");

const Task = require("../models/task");
const middleware = require("../middleware/validator");
const authMiddleware = require("../middleware/auth");
const TASK = "/";

router.get(TASK, authMiddleware, (req, res) => {
    if (req.userData) {
        Task.find({
            userId: req.userData.username
        }, (err, result) => {
            if (err) {
                console.log(err);
                
                res.status(422).send();
            } else {
                res.json(result);
            }
        });
    } else {
        res.status(401).json();
    }
});

router.get(TASK + ":id", authMiddleware, (req, res) => {
    let id = req.params["id"];
    if (id) {
        Task.findById(id, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    } else {
        res.json([]);
    }
});

router.delete(TASK + ":id", authMiddleware, (req, res) => {
    let _id = req.params["id"];
    if (_id) {
        Task.deleteOne({
            _id
        }, (err, result) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.json(result);
            }
        });
    } else {
        res.json([]);
    }
});

router.post(TASK, authMiddleware, middleware.validators.taskValidator, (req, res) => {
    let taskModel = new Task(req.body);
    taskModel.save((err, product) => {
        if (!err) {
            res.json(product);
        } else {
            res.status(422).json(err);
        }
    });
});

router.put(TASK, authMiddleware, middleware.validators.taskUpdateValidator, (req, res) => {
    let query = {
        _id: req.body._id
    };
    let doc = {
        status: req.body.status
    }
    let taskModel = new Task(req.body);
    Task.updateOne(query, req.body, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.status(422).json(err);
        }
    });
});

module.exports = router;