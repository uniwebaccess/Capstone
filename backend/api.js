const router = require('express').Router();
const checker = require('./checker')
//ROUTE /API/
router.post('/url', async (req, res, next) => {
  try {
    console.log("req.body.url", req.body.url)
    const result = await checker(req.body.url)
    console.log("result", result)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

// "start": "react-scripts start"

