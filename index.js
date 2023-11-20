const express = require("express");
const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send(`<h1>Freaking love a cheeky bit of deployment</h1>`);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
