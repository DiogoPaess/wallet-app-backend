require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const routesCategories = require("./routes/categories");
const routesUser = require("./routes/users");
const routerFinances = require("./routes/finances");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Olá, Essa é a aplicação Wallet App!");
});

app.use("/categories", routesCategories);
app.use("/users", routesUser);
app.use("/finances", routerFinances);

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
