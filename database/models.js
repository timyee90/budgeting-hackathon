const db = require("./index.js");
const util = require("util");

db.queryAsync = util.promisify(db.query);

module.exports = {
  getTransactions: () => {
    return db.queryAsync(`SELECT * FROM cash_flow;`);
  },
  postTransactions: (data) => {
    console.log("This is the data: ", data);
    let values = [
      data.date,
      data.description,
      data.amount,
      data.transaction,
      data.category,
      data.accountName,
    ];
    return db.queryAsync(
      `INSERT INTO cash_flow (date, description, amount, transaction, category, account_name) VALUES (?, ?, ?, ?, ?, ?);`,
      values
    );
  },
};
