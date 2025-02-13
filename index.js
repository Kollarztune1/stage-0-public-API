import express from "express";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  const response = {
    email: "akinjejikolawoleraphael@gmail.com",
    current_datetime: new Date().toISOString(),
  };

  res.json (response);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });