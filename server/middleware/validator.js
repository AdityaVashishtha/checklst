const {
    check,
    body,
    validationResult
} = require('express-validator');

function errorUsageMiddleWare(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    next();
}

module.exports = middlewares = {
    validators: {
        taskValidator: [
            body('name').exists().notEmpty().trim().escape(),
            body('label').notEmpty().trim().matches(/\b(?:other|personal|work|shopping)\b/).customSanitizer((str) => str.toLowerCase()),
            body('dueDate').trim().escape(),
            errorUsageMiddleWare
        ],
        taskUpdateValidator: [
            body('_id').exists().notEmpty().trim().escape(),
            body('status').exists().notEmpty().custom(status => status >= 0 && status <= 2),
            errorUsageMiddleWare
        ]
    }
}