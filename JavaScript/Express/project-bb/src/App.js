import './App.css';
import React from 'react';
import config from './config.json';
const fetch = require('node-fetch');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      user: null,
      product: null,
    }
  }

  fetchRandomUser = async() => {
    await fetch(`https://api.bestbuy.com/v1/products(upc=711719541028)?apiKey=${config["apiKeyBB"]}&sort=inStoreAvailability.asc&show=inStoreAvailability,onlineAvailability,inStoreAvailabilityUpdateDate,onlineAvailabilityUpdateDate,name&format=json`)
      .then(res => {
        console.log(res)
        return res.json();
      })
      .then(data => {
        console.log(data.products);
        // console.log(data.results[0]);
        this.setState({
          // user: data.results[0],
          product: data.products[0],
          isLoading: false,
        })
      })
  }

  componentDidMount() {
    // setInterval(this.fetchRandomUser, 3000);
    this.fetchRandomUser();
  }

  render() {
    const { isLoading, user, product } = this.state;
    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <div className="App-header">
          <header>
            {product.name}
          </header>
          <ul>
            <li>
              In-store Availability: {product.inStoreAvailability ? "Available" : "Out of Stock"}
            </li>
            <li>
              Online Availability: {product.onlineAvailability ? "Available" : "Out of Stock"}
            </li>
            <li>
              In-store Last Updated: {product.inStoreAvailabilityUpdateDate}
            </li>
            <li>
              Online Last Updated: {product.onlineAvailabilityUpdateDate}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
