const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/test", (req, res) => {
  res.send("Deu certo");
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", (req, res) => {
  let { title, salary, company, email, description, new_job } = req.body;

  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job,
  })
    .then(() => res.redirect("/"))
    .catch((error) => console.log("Erro ao adicionar vaga: ", error));
});

module.exports = router;
