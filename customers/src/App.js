import React, { Component } from 'react';
import CustomerCardList from './CustomerCardList';
import SearchBox from './SearchBox';
import './App.css';
import RefreshButton from './RefreshButton';


class App extends Component {

  constructor() {
    super();
    this.state = {
      customers: [],
      searchField: ''
    }
  }

  retrieveCustomers = (name) => {
    console.log(name);
    fetch(`/customers?searchQuery=${name ? name : ''}`)
      .then(response => response.json())
      .then(persons => this.setState({ customers: persons }));
  }

  componentDidMount() {
    this.retrieveCustomers();
  }

  onRefreshClick = () => {
    this.retrieveCustomers(this.state.searchField);
  }

  onSearchChange = (event) => {
    this.setState({ searchField : event.target.value});
    this.retrieveCustomers(event.target.value);
  }

  render() {
    return (
      <div>
        <div id="space_background">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
        <div id="app" className="tc">
          <h1 className="f1">Customers</h1>
          <div>
            <SearchBox searchChange={this.onSearchChange} />
            <RefreshButton refreshClick={this.onRefreshClick} />
          </div>
         <CustomerCardList customers={this.state.customers} />
        </div>
      </div>
    );
  }
}

export default App;