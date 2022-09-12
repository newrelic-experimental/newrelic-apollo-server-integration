[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# New Relic Apollo Server OTEL Integration
![GitHub forks](https://img.shields.io/github/forks/newrelic-experimental/newrelic-apollo-server-integration?style=social)
![GitHub stars](https://img.shields.io/github/stars/newrelic-experimental/newrelic-apollo-server-integration?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/newrelic-experimental/newrelic-apollo-server-integration?style=social)

![GitHub all releases](https://img.shields.io/github/downloads/newrelic-experimental/newrelic-apollo-server-integration/total)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub last commit](https://img.shields.io/github/last-commit/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub Release Date](https://img.shields.io/github/release-date/newrelic-experimental/newrelic-apollo-server-integration)


![GitHub issues](https://img.shields.io/github/issues/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub issues closed](https://img.shields.io/github/issues-closed/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub pull requests](https://img.shields.io/github/issues-pr/newrelic-experimental/newrelic-apollo-server-integration)
![GitHub pull requests closed](https://img.shields.io/github/issues-pr-closed/newrelic-experimental/newrelic-apollo-server-integration)


This repo contains an example of New Relic with Apollo Server integration using Open Telemetry standard.

## Value 

Read the techincal guide in the following blog post:

{{Blog post link - coming soon}}

## Installation

Clone this repo.

Run `npm run install` to install all the dependencies.


## Getting Started

This Apollo Server sample project contains only one query-able type `Books` which contains `author` and `title` fileds.

```js
 type Book {
    title: String
    author: String
  }
```

### Run

Start the server using `npm run dev` command and navigate your broser to `http://localhost:4000` which will open Apollo Sandbox where you can run the queries such as:

```js
query BooksQuery {
  books {
    author
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

## Usage

This is a sample repo and is inteded to be used as an integration example
The most important file of the repository showing a sample New Relic Apollo Server Open Telemetry integration can be found in [src/open-telemetry.js](src/open-telemetry.js) file.

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

>We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.


## Contributing

We encourage your contributions to improve [Project Name]! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project. If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company, please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License

[Project Name] is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.

>[If applicable: [Project Name] also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.]
