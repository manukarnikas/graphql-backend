const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;;
const schema = require('./Schema/Schema');
const db = require('./db/db');

const app = express();

const init = async ()=>{

    await db.dbInit();

    app.use('/graphql',graphqlHTTP({
        schema,
        graphiql:true
    }));

    app.listen(4000,()=>{
        console.log('App running on PORT 4000..');
    })
}

init();

