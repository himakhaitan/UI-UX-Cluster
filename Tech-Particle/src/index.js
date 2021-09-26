// REQUIRE

const express = require('express');
const path = require('path');
const hbs = require('hbs')
const chalk = require('chalk');
const app = express();

// VARIABLE DECLERATION

const PORT = process.env.PORT || 3001;

// DIRECTORY PATHS

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// HANDLE BAR SETUP

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// SERVE PUBLIC DIRECTORY

app.use(express.static(publicDirectoryPath));

// GET METHODS

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'A Fun Way To Learn',
    })
});

// 404 ROUTE

app.get('*', (req, res) => {
    res.status(404).send('Oops! Page Not Found!')
});

// LISTEN

app.listen(PORT, () => {
    console.log(`${chalk.green('Server is up and running on PORT ')}${chalk.black.bgGreen(PORT)}${chalk.green(". Tech Particle is LIVE!")}`)
})