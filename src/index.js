const { GraphQLServer } = require('graphql-yoga')
const People = './../database/database';

const resolvers = {
    Query: {
        Greeting: () => `Hello World`,
        People: () => People.find({}),
    },
    Mutation: {
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
  }

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start({port: 7777}, () => console.log(`The server is running on port 7777`))