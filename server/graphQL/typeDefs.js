const { gql } = require('apollo-server-express');


const typeDefinitions = gql`
    type Query {
        hello: String
    }
`

module.exports = { typeDefinitions };