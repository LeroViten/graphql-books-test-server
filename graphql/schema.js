const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');
// const { buildSchema } = require('graphql');
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Hello',
    fields: () => ({
      message: { type: GraphQLString, resolve: () => 'Hello' },
    }),
  }),
});

// module.exports = buildSchema(`
//   type Book {
//     name: String!
//     published: String!
//   }
// `);
module.exports = schema;
