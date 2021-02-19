const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("what's up gamers");
});
// look at the underlying environment and see if there's a port assigned to us || run on port 5000 in development mode
const PORT = process.env.PORT || 5000;
app.listen(PORT);
