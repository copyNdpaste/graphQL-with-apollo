const {gql} = require('apollo-server')

const typeDefs = gql`
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
`

module.exports = typeDefs
