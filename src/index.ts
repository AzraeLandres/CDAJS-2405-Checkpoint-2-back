import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource, initTestData } from "./dataSource/dataSource";

import { buildSchema } from "type-graphql";

import { CountryMutations } from "./db/Resolvers/Mutations/CountryMutation";
import { CountryQueries } from "./db/Resolvers/Queries/CountryQueries";

const port = 4000;

async function startServerApollo() {
  try {
    const schema = await buildSchema({
      resolvers: [CountryMutations, CountryQueries],
    });
    const server = new ApolloServer({
      schema,
    });

    await dataSource.initialize();
    console.log("Data Source has been initialized!");
    initTestData();
    const { url } = await startStandaloneServer(server, {
      listen: { port },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServerApollo();
