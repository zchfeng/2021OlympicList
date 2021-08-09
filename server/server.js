const express = require("express");
const request = require("request");
const app = express();
const port = 3000;

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
};
app.use(allowCrossDomain);

app.get("/data", (req, res) => {
  request(
    {
      url: "http://apia.yikeapi.com/olympic/?appid=43656176&appsecret=I42og6Lm",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    function (error, response, body) {
      if (error) {
        res.send(error);
      } else {
        console.log(response.body);
        res.send(response.body);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
