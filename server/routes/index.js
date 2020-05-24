const express = require("express");
const router = express.Router();
const taskRoute = require("./task");

const TASK_ROUTE_PATH = "/task";

router.use(TASK_ROUTE_PATH, taskRoute);

module.exports = router;