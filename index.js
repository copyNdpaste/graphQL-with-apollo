const { ApolloServer } = require('apollo-server')

const queries = require('./typeDefs/_queries')

const teamsTypeDefs = require('./typeDefs/teamsTypeDefs')
const equipmentsTypeDefs = require('./typeDefs/equipmentsTypeDefs')
const suppliesTypeDefs = require('./typeDefs/suppliesTypeDefs')

const mutations = require('./typeDefs/_mutations')
const teamsResolvers = require('./resolvers/teamsResolvers')
const equipmentsResolvers = require('./resolvers/equipmentsResolvers')

const typeDefs = [
    queries, mutations, teamsTypeDefs, equipmentsTypeDefs, suppliesTypeDefs
]

const resolvers = [teamsResolvers, equipmentsResolvers]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
