const express = require("express");
const mongoose = require("mongoose");
const user_route = require("./src/routes/user.route")
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("Success connection to db");
            app.listen(PORT_SERVER, () => {
                console.log("#########################");
                console.log("####### API REST ########");
                console.log("#########################");
                console.log(`https://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
            });
        }
    }
);

app.use(express.json());

//http://localhost:3977/home
app.get('/home', (req, res)=> res.send("Hello world"))

//http://localhost:3977/api/v1/people
app.use("/api/v1/people", user_route);