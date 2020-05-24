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
            body('title').exists().notEmpty().trim().escape(),
            body('description').trim().escape(),
            body('priority').notEmpty().trim().matches(/\b(?:high|low|medium)\b/).customSanitizer((str) => str.toUpperCase()),
            body('dueDate').trim().escape(),
            body('duration'),
            errorUsageMiddleWare
        ]
    }
}