const database = require("../database")

const resolvers = {
    Query: {
      equipments: () => database.equipments,
      supplies: () => database.supplies,
    },
    Mutation: {
      insertEquipment: (parent, args, context, info) => {
          console.log('insert equipment!')
          database.equipments.push(args)
          return args
      },
      deleteEquipment: (parent, args, context, info) => {
          const deleted = database.equipments
              .filter((equipment) => {
                  return equipment.id === args.id
              })[0]
          database.equipments = database.equipments
              .filter((equipment) => {
                  return equipment.id !== args.id
              })
          return deleted
      },
      editEquipment: (parent, args, context, info) => {
          return database.equipments.filter((equipment) => {
              return equipment.id === args.id
          }).map((equipment) => {
              Object.assign(equipment, args)
              return equipment
          })[0]
      },
    }
  }

module.exports = resolvers
