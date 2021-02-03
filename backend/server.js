

const express = require('express');
const puppeteer = require('puppeteer');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');


const app = express()


app.use(morgan('dev'));
app.use(express.json())
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', require('./api'))


app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})


// main("https://en.wikipedia.org/wiki/Penguin");




app.listen(5000, () => {
  console.log('server is running on 5000');
});

module.exports = app
