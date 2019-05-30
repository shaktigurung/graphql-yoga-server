const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds263816.mlab.com:63816/population', {useNewUrlParser: true}, (err) => {    
    if (err) {
        console.log('Some problem with the connection ' +err)   
    } 
    else {
        console.log('The Mongoose connection is ready')  
    }

});

const Schema = mongoose.Schema;
const peopleSchema = new Schema({
    first: { type: String  },
    last: { type: String}
})
const People = mongoose.model('people', peopleSchema);

module.exports = People;