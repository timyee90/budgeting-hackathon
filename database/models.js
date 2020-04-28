const db = require('./index.js');
const util = require('util');

db.queryAsync = util.promisify(db.query);

module.exports.get = () => {
  return db.queryAsync(`SELECT * FROM cash_flow;`);
};
