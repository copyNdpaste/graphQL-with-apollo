const {gql} = require('apollo-server')

const typeDefs = gql`
    type Supply {
        id: String,
        team: Int
    }
`

module.exports = typeDefs
