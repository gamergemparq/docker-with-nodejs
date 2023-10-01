const express = require('express');

const ProductRoutes = require("./routes/product.route");
const SettingsRoutes = require("./routes/settings.route");

const app = express();
// const PORT = 3000;

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get('/', (req, res) => {
    // res.send("I'm in a docker and I changed, kiki?")
    res.status(200).json({ alive: "I'm in a docker and I changed, kiki?"});
})

/* Telling the server to use the routes in the ProductRoutes file. */
app.use("/api", ProductRoutes);
app.use("/api", SettingsRoutes);

module.exports = app;

// app.listen(PORT, error => {
//     if(!error){
//         console.log("Server is running on port " + PORT);
//     } else {
//         console.log("Error: " + error);
//     }  
// })