const express = require("express");
const app = express();
const router = express.Router();

const assignRoutes = require("./src/routes")

// Middlewares
app.use(express.json());
// app.use(require('./middleware/auth.js'))

// Routes
assignRoutes(router);
app.use('/', router)

module.exports = app;
