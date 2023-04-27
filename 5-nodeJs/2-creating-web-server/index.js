const express = require("express");
const app = express();
const port = 3000;

// console.log(app);

app.get("/", (req, res) => {
  //   console.log(`Aha ha we receieved a request at URL /`);
  res.send(`Kesy ho beta. Mai app ka web server hun :) :)`);
});

app.listen(port, () => {
  console.log(`SERVER LISTENING AT PORT ${port}`);
});
