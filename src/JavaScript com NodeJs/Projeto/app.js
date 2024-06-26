const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/connection");
const bodyParser = require("body-parser");
const Job = require("./models/Job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O nosso app esta rodando na porta ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
const { engine } = require("express-handlebars");
app.engine("handlebars", engine({ defaultLayout: "main" }));
// const hbs = require("express-handlebars").create();
// app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco de dados: ", error.message);
    console.log("Erro detalhado: ", error);
  });

app.get("/", (req, res) => {
  let search = req.query.job;
  let query = "%" + search + "%";

  if (!search) {
    Job.findAll({ order: [["createdAt", "DESC"]] })
      .then((jobs) => {
        res.render("index", {
          jobs,
        });
      })
      .catch((error) => {
        console.log("Erro ao buscar jobs: ", error.message);
      });
  } else {
    Job.findAll({
      where: { title: { [Op.like]: query } },
      order: [["createdAt", "DESC"]],
    })
      .then((jobs) => {
        console.log(search);
        res.render("index", {
          jobs,
          search,
        });
      })
      .catch((error) => {
        console.log("Erro ao buscar jobs: ", error.message);
      });
  }
});

app.use("/jobs", require("./routes/jobs"));
