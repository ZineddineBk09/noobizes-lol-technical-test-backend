import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import playerTypeDefs from "./graphql/schemas/playerSchema";
import matchTypeDefs from "./graphql/schemas/matchSchema";
import playerResolvers from "./graphql/resolvers/playerResolver";
import matchResolvers from "./graphql/resolvers/matchResolver";

// Load environment variables from .env file
dotenv.config();

// Merge schemas and resolvers
const typeDefs = [playerTypeDefs, matchTypeDefs];
const resolvers = [playerResolvers, matchResolvers];

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
