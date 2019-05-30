const { GraphQLServer } = require('graphql-yoga')
const Query = require('./../resolvers/Query');
const Mutation = require('./../resolvers/Mutation');

//Resolvers
const resolvers = {
    Query,
    Mutation
  }

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start({port: 7777}, () => console.log(`The server is running on port 7777`))