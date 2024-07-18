const express = require('express');
const serverlessExpress = require('@vendia/serverless-express');
const app = express();

app.get("/", (req,res)=> {
    res.render("top.ejs")
});

app.listen(3000);
