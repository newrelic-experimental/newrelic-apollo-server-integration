const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Author {
    id: ID!
    name: String
    books: [Book]
  }

  extend type Book @key(fields: "id") {
    id: ID! @external
    authors: [Author]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  extend type Query {
    author(id: ID!): Author
    authors: [Author]
  }
`;

module.exports = { typeDefs };
