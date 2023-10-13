const express = require("express");
const db = require("./db");
const routesCategories = require("./routes/categories");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, Essa é a aplicação Wallet App!");
});

app.get("/categories", (req, res) => {
  db.query("SELECT * FROM categories", (error, response) => {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(200).json(response.rows);
  });
});

app.use("/categories", routesCategories);

app.listen(port, () => {
  db.connect()
    .then(() => {
      console.log("DB connect");
    })
    .catch((error) => {
      throw new Error(error);
    });
  console.log(`Example app listening on port ${port}`);
});
