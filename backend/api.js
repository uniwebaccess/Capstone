const database = require("./Firebase/firebase");
const router = require("express").Router();
const checker = require("./checker");

//ROUTE /API/
router.get("/scan/:urlKey", async (req, res, next) => {
  try {
    const scanRef = database.ref("/scans/" + req.params.urlKey);
    const avgDataRef = database.ref("/average-results");

    let retrievedData = {};

    // Retrieves data of individual scan
    await scanRef.once("value", (snapshot) => {
      if (snapshot.exists()) {
        retrievedData = snapshot.val();
      } else {
        res.send("Not found in database");
      }
    });

    // Retrieves average score data
    await avgDataRef.once("value", (snapshot) => {
      if (snapshot.exists()) {
        retrievedData = { ...retrievedData, avgData: snapshot.val() };
      }
    });

    //Sends retrieved data if
    if (retrievedData["data"]) {
      res.json(retrievedData);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/scan", async (req, res, next) => {
  try {
    const result = await checker(req.body.url);

    await database
      .ref("/scans/" + req.body.urlKey)
      .set({ url: req.body.url, data: result });

    //current average
    //total number of scans
    // (1/totalscans) * newscanscore  + ((totalscans-1) / totalscans ) *  current average

    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
