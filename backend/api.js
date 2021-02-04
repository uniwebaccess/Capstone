const database = require("../src/components/Firebase/firebase");
const router = require("express").Router();
const checker = require("./checker");

//ROUTE /API/
router.get("/test/:urlKey", async (req, res, next) => {
  console.log("outside of try catch in get route");
  try {
    console.log("inside of try catch in get route");
    const ref = database.ref("/scans/" + req.params.urlKey);
    console.log("req.body.urlKey", req.params.urlKey);

    // .once retrieves data once wheras .on would continuously update
    ref.once("value", (snapshot) => {
      if (snapshot.exists()) {
        const retrievedData = snapshot.val();
        res.json(retrievedData);
      } else {
        console.log("snapshot not found");
        res.json({ url: "", data: null });
        // res.sendStatus(500);
      }
    });
  } catch (err) {
    next(err);
  }
});

router.post("/test", async (req, res, next) => {
  try {
    const result = await checker(req.body.url);

    await database
      .ref("/scans/" + req.body.urlKey)
      .set({ url: req.body.url, data: result });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// "start": "react-scripts start"
