const models = require("../database/models.js");

module.exports = {
  getTransactions: (req, res) => {
    models
      .getTransactions()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },

  postTransactions: (req, res) => {
    models
      .postTransactions(req.body)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },

  getTransactionsPerField: (req, res) => {
    models
      .getTransactionsPerField(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },
};
