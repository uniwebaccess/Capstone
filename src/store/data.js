import axios from "axios";
import database from "../components/Firebase/firebase";

const RUN_DATA = "RUN_DATA";
const FETCH_DATA = "FETCH_DATA";

const ranData = (data, url) => {
  return {
    type: RUN_DATA,
    data,
    url,
  };
};

const fetchedData = (data, url) => {
  return {
    type: FETCH_DATA,
    data,
    url,
  };
};

export const runData = (urlKey, url) => {
  return async (dispatch) => {
    try {
      //Makes backend call to perform scrape
      const res = await axios.post("/api/url", { url: url });

      //Adds response data and url to "/scans" in db
      database
        .ref("/scans/" + urlKey)
        .set({ url: url, data: res.data })
        .then(dispatch(ranData(res.data, url)));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchData = (urlKey) => {
  return (dispatch) => {
    const ref = database.ref("/scans/" + urlKey);
    // .once retrieves data once wheras .on would continuously update
    ref.once("value", (snapshot) => {
      if (snapshot.exists()) {
        const retrievedData = snapshot.val();
        dispatch(fetchedData(retrievedData.data, retrievedData.url));
      } else {
        console.log("could not find scrape for the url");
      }
    });
  };
};

const initialState = {
  data: null,
  url: "",
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case RUN_DATA:
      return { data: action.data, url: action.url };
    case FETCH_DATA:
      return { data: action.data, url: action.url };
    default:
      return state;
  }
};
export default data;
