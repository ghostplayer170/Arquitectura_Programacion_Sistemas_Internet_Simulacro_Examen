import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts"; // Leer variables de entorno
import { typeDefs } from "./gql/schema.ts";
//import { resolvers } from "./gql/resolvers.ts";

const env = await load(); // Carga Variables de entorno

const PORT = env.PORT || Deno.env.get("PORT");

// Verifica variables de entorno.
if (!PORT) {
  console.log("Port found");
  Deno.exit(1);
}

const server = new ApolloServer({
  //resolvers: resolvers,
  typeDefs: typeDefs,
});

const { url } = await startStandaloneServer(server,{
  listen: {
    port: PORT,
  }
});

console.log(`🚀 Server ready at ${url}`);