import React, { Component } from "react";
import axios from "axios";
import AllBeers from './AllBeers';

class Beer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({ beers: response.data });
    });
  }

  listName = () =>
    this.state.beers.find(beer => (
      <li className="image-beer">
         <img src={beer.image_url} /> 
         {beer.name}
         {beer.tagline}
         {beer.contributed_by}
        <hr style={{border: 15}} />
      </li>
    ));

  render() {
    return (
      <div>
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title" >perro</h1>
              <h2 className="subtitle" />
            </div>
          </div>
        </section>
        <ul>{this.listName()}</ul>
      </div>
    );
  }
}

export default Beer;