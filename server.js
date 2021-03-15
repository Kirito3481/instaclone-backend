require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  context: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE1NzgyNjczfQ.09uC22I5qrzbJ9JjcCLqds5Va-Vl-ziKqAEFXMA4KQ4",
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`? Server is running on http://localhost:${PORT}/`));
