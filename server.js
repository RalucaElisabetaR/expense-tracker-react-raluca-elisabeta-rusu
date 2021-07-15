const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const app = express()
//create simple route
app.get('/', (req, res) => res.send('Hello'))
app.listen()
