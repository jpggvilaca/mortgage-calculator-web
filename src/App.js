import React, { Component } from 'react';

import Banner from './Banner'
import MonthlyPaymentsForm from './MonthlyPaymentsForm'
import MonthlyPaymentsTable from './MonthlyPaymentsViews/MonthlyPaymentsTable'

import './App.css';

class App extends Component {
  state = { monthlyPayments: [] };

  showMonthlyPayments = monthlyPayments => this.setState({ monthlyPayments });

  render() {
    return (
      <div className="container-fluid">

        <Banner/>
        <MonthlyPaymentsForm onComputedResult={this.showMonthlyPayments} />
        <MonthlyPaymentsTable monthlyPayments={this.state.monthlyPayments} />

      </div>
    );
  }
}

export default App;
