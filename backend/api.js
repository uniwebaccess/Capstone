// import database from "../src/components/Firebase/firebase"
// const database = require("../src/components/Firebase/firebase")
const router = require('express').Router();
const checker = require('./checker')
//ROUTE /API/
router.post('/url', async (req, res, next) => {
  try {
    console.log("req.body.url", req.body.url)
    const result = await checker(req.body.url)
    // console.log("result", result)

    // await database
    //   .ref("/scans/" + req.body.urlKey)
    //   .set({ url: req.body.url, data: result })

    res.json(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router;

// "start": "react-scripts start"

