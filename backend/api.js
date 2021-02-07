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

    //Checks if url has been scanned previously
    let urlExists = false;
    await database
      .ref("/scans/" + req.body.urlKey)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          urlExists = true;
        }
      });

    //Set urlKey to contain checker results in database
    await database
      .ref("/scans/" + req.body.urlKey)
      .set({ url: req.body.url, data: result });

    //for every percentage i the o
    // (1/totalscans) * newscanscore  + ((totalscans-1) / totalscans ) *  current average
    //Only changes average-results if url hasn't been scanned before
    if (!urlExists) {
      let avgResultsObj = {};
      await database.ref("/average-results/").once("value", (snapshot) => {
        if (snapshot.exists()) {
          avgResultsObj = snapshot.val();
        }
      });

      if (!avgResultsObj["total-scans"]) avgResultsObj["total-scans"] = 0;

      const newTotal = avgResultsObj["total-scans"] + 1;
      avgResultsObj = { ...avgResultsObj, "total-scans": newTotal };

      await database.ref("/average-results/").set(avgResultsObj);

      console.log("average results object in api is", avgResultsObj);
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
