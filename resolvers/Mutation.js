const People = require('./../database/database');

const  Mutation = {
    createPerson: async (parent, args) =>{
        const newPerson = new People({
            first: args.first,
            last: args.last
        })
        const error = await newPerson.save()

        if(error) return error 
        return newPerson
    },
    deletePerson: (parent, args) => {
        return new Promise( (resolve, reject) => {
            People.findOneAndDelete(args.id, function(err, result){
                if (err) return err;
                resolve(result)
            })
        })
    }
}

module.exports = Mutation;