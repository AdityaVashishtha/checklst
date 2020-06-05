const express = require("express");
const router = express.Router();
const taskRoute = require("./task");
const userRoute = require("./user");

const TASK_ROUTE_PATH = "/task";
const USER_AUTH_PATH = "/auth";

router.use(TASK_ROUTE_PATH, taskRoute);
router.use(USER_AUTH_PATH, userRoute);

module.exports = router;