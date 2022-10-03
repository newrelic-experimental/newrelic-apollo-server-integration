[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# New Relic Apollo Server OTEL Integration
![GitHub forks](https://img.shields.io/github/forks/newrelic-experimental/newrelic-apollo-server-integration?style=social)
![GitHub stars](https://img.shields.io/github/stars/newrelic-experimental/newrelic-apollo-server-integration?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/newrelic-experimental/newrelic-apollo-server-integration?style=social)

![GitHub last commit](https://img.shields.io/github/last-commit/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub issues](https://img.shields.io/github/issues/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub issues closed](https://img.shields.io/github/issues-closed/newrelic-experimental/newrelic-apollo-server-integration)


This repo contains an example of New Relic and Apollo Server integration using Open Telemetry standard.

- the [main branch](https://github.com/newrelic-experimental/newrelic-apollo-server-integration/tree/main) contains example of a monolith Apollo server integration
- the [federated-apollo branch](https://github.com/newrelic-experimental/newrelic-apollo-server-integration/tree/federated-apollo) contains example of Federated Apollo integration

## Value 

Read the techincal guide in the following blog post:

[Monitoring Apollo Server with OpenTelemetry](https://newrelic.com/blog/how-to-relic/monitoring-apollo-server)

## Prerequisites
- [New Relic Account](https://newrelic.com/signup)
- [New Relic License Key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#overview-keys)

## Installation

Clone this repo.

Install all dependencies
- `npm run install`

Add your New Relic [license key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#overview-keys) to [./src/open-telemetry.js](./src/open-telemetry.js) file.

## Getting Started

This Apollo Server monilith sample project contains two query-able types `Book` and `Author`

```js
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
  }
```

### Run

Start the server using `npm run server` command and navigate your broser to `http://localhost:4000` which will open Apollo Sandbox where you can run the queries such as:

```js
query BooksQuery {
  books {
    author {
      name
    }
    title
  }
}
```

```js
query BookTitlesQuery {
  books {
    title
  }
}
```
## Traces in New Relic UI

Navigate to Traces tab in the New Relic UI and you should see your queries data
![Screenshot 2022-09-26 at 14 21 47](https://user-images.githubusercontent.com/6328360/192287581-2ee153af-b54b-4579-8e70-a1785f35e6b0.png)
Where you can see your Apollo trace data

![Screenshot 2022-09-26 at 14 22 42](https://user-images.githubusercontent.com/6328360/192287766-abfe6070-6351-43d1-8715-719841b48d40.png)
And all the spans and performance data etc.
## Usage

This is a sample repo and is inteded to be used as an integration example.

## Support
.New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

>We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.


## Contributing

We encourage your contributions to improve [Project Name]! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project. If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company, please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License

New Relic Apollo Server Integration is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
