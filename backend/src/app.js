const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("jayasurya");
    res.send("Hello World");
});


app.listen(3000,()=>{
        console.log("app is listening at the port 3000");
});