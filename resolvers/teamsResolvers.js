const database = require("../database");

const resolvers = {
    Query: {
        teams: () => database.teams
        .map((team) => {
            team.supplies = database.supplies
            .filter((supply) => {
                return supply.team === team.id
            })
            return team
        }),
        team: (parent, args, context, info) => database.teams.filter((team) => {
            return team.id == args.id;
        })[0]
    }
}

module.exports = resolvers
