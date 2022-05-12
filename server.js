const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const graphQlSchema = require('./graphql/schema');
const graphQlResolver = require('./graphql/resolver');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

// * parse the bodies:
app.use(bodyParser.json());

// * handling CORS policy:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true,
  })
);
app.listen(PORT, () => console.log(` 🚀 Server is running on PORT ${PORT}`));
