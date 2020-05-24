const express = require("express");
const router = express.Router();
const {
    validationResult
} = require("express-validator");

const Task = require("../models/task");
const middleware = require("../middleware/validator");
const TASK = "/";

router.get(TASK, (req, res) => {
    Task.find((err, result) => {
        if (err) {
            res.send("EROR");
        } else {
            res.json(result);
        }
    });
});

router.get(TASK + ":id", (req, res) => {
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

router.post(TASK, middleware.validators.taskValidator, (req, res) => {
    let taskModel = new Task(req.body);
    taskModel.save((err, product) => {
        if (!err) {
            res.json(product);
        } else {
            res.json(err);
        }
    });
});

module.exports = router;