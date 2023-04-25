const express = require('express');
const {dbConn} = require('./config/db');
const cors = require('cors');
const userroutes = require('./routes/userSignup')

const app = express();
const port = 1234;

app.use(express.json());
app.use(cors());
app.use(userroutes);
dbConn();

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});