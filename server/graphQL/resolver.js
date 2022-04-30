const { typeDefinitions } = require('./typeDefs');

const resolvers = {
    Query: {
        hello: () => 'Hello world'
    }
}

module.exports = { resolvers };