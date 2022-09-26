// Import required symbols
const { Resource } = require("@opentelemetry/resources");
const {
  SimpleSpanProcessor,
  ConsoleSpanExporter,
} = require("@opentelemetry/sdk-trace-base");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const {
  ExpressInstrumentation,
} = require("@opentelemetry/instrumentation-express");
// **DELETE IF SETTING UP A GATEWAY, UNCOMMENT OTHERWISE**
const {
  GraphQLInstrumentation,
} = require("@opentelemetry/instrumentation-graphql");

const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-proto");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");

const api = require("@opentelemetry/api");
api.diag.setLogger(new api.DiagConsoleLogger(), api.DiagLogLevel.DEBUG);

// Register server-related instrumentation
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    // **DELETE IF SETTING UP A GATEWAY, UNCOMMENT OTHERWISE**
    new GraphQLInstrumentation(),
  ],
});

// Initialize provider and identify this particular service
// (in this case, we're implementing a federated gateway)
const provider = new NodeTracerProvider({
  resource: Resource.default().merge(
    new Resource({
      // Replace with any string to identify this service in your system
      "service.name": "apollo-books-otel",
    })
  ),
});

// Configure a test exporter to print all traces to the console
const consoleExporter = new ConsoleSpanExporter();
// Test out by printing data to the console (for debugging purposes)
provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));

const collectorOptions = {
  url: "https://otlp.eu01.nr-data.net:4318/v1/traces",
  headers: {
    "api-key": "{{Your New Relic License Ingest Key}}",
  },
  concurrencyLimit: 10,
};

// Configure an exporter that pushes all traces to a Collector
// In this case it's the New Relic's collector setup with collectorOptions
const collectorTraceExporter = new OTLPTraceExporter(collectorOptions);
provider.addSpanProcessor(
  new BatchSpanProcessor(collectorTraceExporter, {
    maxQueueSize: 1000,
    scheduledDelayMillis: 1000,
  })
);

// Register the provider to begin tracing
provider.register();
