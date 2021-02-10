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

    //Sends retrieved data if it exists
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

    let avgResultsObj = {};
    await database.ref("/average-results/").once("value", (snapshot) => {
      if (snapshot.exists()) {
        avgResultsObj = snapshot.val();
      }
    });

    //Only changes average-results if url hasn't been scanned before
    if (!urlExists) {
      if (!avgResultsObj["total-scans"]) avgResultsObj["total-scans"] = 0;

      const newTotal = avgResultsObj["total-scans"] + 1;
      avgResultsObj = { ...avgResultsObj, "total-scans": newTotal };

      Object.keys(result).forEach((key) => {
        let newScan = result[key];

        if (!Object.keys(newScan).length) newScan = {};
        if (!newScan["percent"]) newScan["percent"] = 100;

        let avgResult = {};
        avgResultsObj[key]
          ? (avgResult = avgResultsObj[key])
          : (avgResult = { percent: 100, passed: 0 });
        avgResultsObj[key] = { percent: 100, passed: 0 };
        const totalScans = avgResultsObj["total-scans"];

        //Recalculates average percent on average-results
        let newPercent =
          (1 / totalScans) * newScan["percent"] +
          ((totalScans - 1) / totalScans) * avgResult["percent"];

        newPercent = Math.round(newPercent * 100) / 100;

        avgResultsObj[key]["percent"] = newPercent;

        //Adds to number of passing scans on average-results if new scan passed field
        if (newScan["passed"])
          avgResultsObj[key]["passed"] = avgResultsObj[key]["passed"] + 1;
      });

      await database.ref("/average-results/").set(avgResultsObj);
    }

    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
