const db = require("./index.js");
const util = require("util");

db.queryAsync = util.promisify(db.query);

module.exports = {
  getTransactions: () => {
    return db.queryAsync(`SELECT * FROM cash_flow;`);
  },

  postTransactions: (data) => {
    // console.log('This is the data: ', data);

    let values = data.map((transactions) => {
      return [
        transactions.Date,
        transactions.Description,
        transactions.Amount,
        transactions.Transaction_Type,
        transactions.Category,
        transactions.Account_Name || null,
      ];
    });
    console.log(values);
    return db.queryAsync(
      `INSERT INTO cash_flow (date, description, amount, transaction, category, account_name) VALUES ?;`,
      [values]
    );
  },

  getTransactionsPerField: (data) => {
    let values = [data.tableField, searchValue];
    return db.queryAsync(`SELECT * FROM cash_flow WHERE ? = ?;`, values);
  },
};
