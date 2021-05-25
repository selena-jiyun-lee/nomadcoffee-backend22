const resolvers = {
  Query: {
    coffees: () => client.coffee.findMany()
  },
  Mutation: {
    createCoffee: (_, {name, price}) => client.coffee.create({
      data: {
        name,
        price
      }
    }),
    deleteCoffee: (_, {id}) => client.coffee.delete({
      where: {id}
    })
  }
};