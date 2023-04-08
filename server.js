// import modules
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helper');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware mounting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);

// establish sequelize connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});