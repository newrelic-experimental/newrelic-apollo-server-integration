const fetch = require("node-fetch");

const minInterval = 5000; // 5 seconds
const maxInterval = 30000; // 30 seconds
const errorProbability = 0.1; // 10% chance or error

const queries = [
  {
    name: "BooksQuery",
    query: `
      query BooksQuery {
        books {
          id,
          title
        }
      }`,
  },
  {
    name: "Book",
    query: `
      query Book($bookId: ID!) {
        book(id: $bookId) {
          title
          authors {
            name
          }
        }
      }`,
    variables: { bookId: () => Math.floor(Math.random() * 6) + 1 },
  },
  {
    name: "BooksAuthorsQuery",
    query: `
      query BooksAuthorsQuery {
        books {
          title
          authors {
            name
          }
        }
      }`,
  },
  {
    name: "AuthorsQuery",
    query: `
      query AuthorsQuery {
        authors {
          id
          name
        }
      }`,
  },
  {
    name: "AuthorsBooksQuery",
    query: `
      query AuthorsBooksQuery {
        authors {
          name
          books {
            title
          }
        }
      }`,
  },
];

async function sendRandomRequest() {
  const selectedQuery = queries[Math.floor(Math.random() * queries.length)];

  // Clone the selected query to avoid modifying the original
  const modifiedQuery = { ...selectedQuery };

  // Randomly decide whether to add a non-existent property (10% chance)
  if (Math.random() <= errorProbability) {
    modifiedQuery.query = modifiedQuery.query.replace(/(\n\s*})/, (match) => {
      return match.includes("}") ? "\n  nonExistentProperty\n}" : match;
    });
  }

  const variables = {};
  for (const key in modifiedQuery.variables) {
    variables[key] =
      typeof modifiedQuery.variables[key] === "function"
        ? modifiedQuery.variables[key]()
        : modifiedQuery.variables[key];
  }

  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: modifiedQuery.query,
      variables: variables,
    }),
  });

  const json = await response.json();
  console.log(`Results for ${selectedQuery.name}:`);
  console.log(json);
}

function runPeriodically() {
  sendRandomRequest();

  const randomInterval =
    Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  setTimeout(runPeriodically, randomInterval);
}

runPeriodically();
