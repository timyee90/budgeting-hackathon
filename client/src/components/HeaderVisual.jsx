import React from "react";

class HeaderVisual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let amountDebit = 0,
      amountCredit = 0,
      averageExpense = 0,
      averageIncome = 0,
      percentage = 0,
      message;
    this.props.transactions.forEach((item) => {
      if (item.transaction === "debit") {
        amountDebit += item.amount;
      } else {
        amountCredit += item.amount;
      }
    });
    averageExpense = Math.floor(amountDebit / 12);
    averageIncome = Math.floor(amountCredit / 12);
    percentage = Math.floor((averageExpense / averageIncome) * 100);

    if (percentage > 80) {
      message = (
        <h1>
          Your expenses are <strong>{percentage}%</strong> of your income. We
          recommend that you should not spend more than <strong>80%</strong>.
        </h1>
      );
    } else {
      message = (
        <h1>
          Your expenses are <strong>{percentage}%</strong> of your income. Keep
          up the great work and spend less than <strong>80%</strong>.
        </h1>
      );
    }

    return (
      <section className="section">
        <div>
          <header>
            <h1>Based on the documentation you provided,</h1>
            <h1>
              Your average monthly expenses are{" "}
              <strong>${averageExpense}</strong> while your average monthly
              income is <strong>${averageIncome}</strong>.
            </h1>
            <br />
            {message}
          </header>
        </div>
      </section>
    );
  }
}

export default HeaderVisual;
