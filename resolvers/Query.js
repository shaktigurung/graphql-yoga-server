const People = require('./../database/database');

const Query = {
    Greeting: () => `Hello World`,
    People: () => People.find({}),
}

module.exports = Query;