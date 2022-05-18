require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./configs/db');
const { ApolloServer } = require('apollo-server-express');
const { typeDefinitions } = require('./graphQL/typeDefs');
const { resolvers } = require('./graphQL/resolver');

async function startApp() {

    await connectDB();
    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Welcome to the server');
    })

    const apolloServer = new ApolloServer({
        typeDefs: typeDefinitions,
        resolvers: resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.use('*', (req, res) => res.status(404).send('Page not found!'))

    app.listen(process.env.PORT || 3500, () => console.log('Server running on Port 3500'));
}

startApp();
