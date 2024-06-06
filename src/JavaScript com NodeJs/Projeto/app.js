const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./db/connection");
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O nosso app esta rodando na porta ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco de dados: ", error.message);
    console.log("Erro detalhado: ", error);
  });

app.get("/", (req, res) => {
  res.send("Está funcionando 2");
});

app.use("/jobs", require("./routes/jobs"));
