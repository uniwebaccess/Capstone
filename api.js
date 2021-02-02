const router = require('express').Router();
const main = require('./src/scripts/index.js')
router.get('/url', async (req, res, next) => {
  try {
    const result = await main(req.body.url)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
