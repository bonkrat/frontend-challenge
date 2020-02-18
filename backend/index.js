const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./src/schema");
const express = require("express");
const mongoose = require("mongoose");
const resolvers = require("./src/resolvers");
const { random } = require("lodash");

// connect mongooose
var mongoDb = "mongodb://127.0.0.1:27017/frontend-challenge";
mongoose.set("useFindAndModify", false);
mongoose.connect(mongoDb, { useNewUrlParser: true, useFindAndModify: false });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false
});

const app = express();

app.use("*", (req, res, next) => {
  setTimeout(() => {
    next();
  }, Math.floor(random(250)));
});

app.use(express.static("public"));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
