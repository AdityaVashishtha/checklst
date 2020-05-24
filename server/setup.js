function initDb() {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/checklst', {
        useNewUrlParser: true
    });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("COnnected to db !! Yaya");
    });
}

module.exports = {
    init: () => {
        initDb();
    }
}