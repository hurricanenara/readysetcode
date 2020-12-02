import './App.css';
import React from 'react';
import config from './config.json';
import sendMessage from './test';
require('dotenv').config();

const accountSid = "ACea6a293aff07b005c805d5ab83a2a108";
const authToken = "7c30c422453bfab2ae584a0bcb77e4d9";
const client = require('twilio')(accountSid, authToken);

const fetch = require('node-fetch');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      product: null,
    }
    // this.alertMe = this.alertMe.bind(this);
  }

  fetchAvailability = async() => {
    await fetch(`https://api.bestbuy.com/v1/products(upc=711719541028)?apiKey=${config["apiKeyBB"]}&sort=inStoreAvailability.asc&show=inStoreAvailability,onlineAvailability,inStoreAvailabilityUpdateDate,onlineAvailabilityUpdateDate,name&format=json`)
      .then(res => {
        // console.log(res)
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

  alertMe(client) {
    client.messages
      .create({
        body: "Test1!",
        from: '+12056548194',
        to: '+16469460875'
      })
      .then(message => console.log(message.sid));
  }

  componentDidMount() {
    // setInterval(this.fetchRandomUser, 3000);
    this.fetchAvailability()
  }

  render() {
    const { isLoading, product } = this.state;
    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <div className="App-header">
          <header>
            {product.name}
          </header>
          {
            // (product.inStoreAvailability || product.onlineAvailability) ? this.alertMe() : null
            // !product.inStoreAvailability ? this.alertMe() : null
          }
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
