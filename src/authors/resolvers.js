const { authors } = require("./data");
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    authors: () => authors,
    author: (_, { id }) => authors[id - 1],
  },
  Author: {
    books(author) {
      return author.books.map((id) => ({
        __typename: "Book",
        id,
      }));
    },
  },
  Book: {
    authors(book) {
      return authors.filter((author) =>
        author.books.includes(parseInt(book.id))
      );
    },
  },
};

module.exports = { resolvers };
