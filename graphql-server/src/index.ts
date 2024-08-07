import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { useAPQ } from "@graphql-yoga/plugin-apq";

const port = Number(process.env.API_PORT) || 4000;
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema,
  logging: true,
  healthCheckEndpoint: "/health",
  plugins: [useAPQ()],
});

// Pass the yoga server instance into the createServer function
const server = createServer((req, res) => {
  yoga.handle(req, res);
});

// Start the server and you're done!
server.listen(port, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
