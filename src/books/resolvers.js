const { books } = require("./data");
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  // reference resolver for Books (service)
  Book: {
    __resolveReference(ref) {
      return books[ref.id - 1];
    },
  },
  Query: {
    books: () => books,
    book: (_, { id }) => books[id - 1],
  },
};

module.exports = { resolvers };
