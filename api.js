const router = require('express').Router();
const main = require('./src/scripts/index.js')
//ROUTE /API/
router.post('/url', async (req, res, next) => {
  try {
    console.log("req.body.url", req.body.url)
    const result = await main(req.body.url)
    console.log("result", result)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

// "start": "react-scripts start"

