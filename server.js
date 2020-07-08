 // IMPORTING ALL THE MODULES REQUIRED.
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
// PORT CONNECTION.
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SETTING UP VIEWS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// IMPORTING ROUTES
const routes = require("./controllers/burgers_controller.js")
app.use(routes);
// LISTENING TO PORT.
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));