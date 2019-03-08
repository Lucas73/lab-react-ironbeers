import React, { Component } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

class AllBeers extends Component {
  constructor(props) {
    super(props);
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
    this.state.beers.map(beer => (
      <li className="image-beer">
         <img src={beer.image_url} alt="img"/> 
         <NavLink to={`/beer/${beer._id}`}>{ beer.name }</NavLink>
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
              <h1 className="title" />
              <h2 className="subtitle" />
            </div>
          </div>
        </section>
        <ul>{this.listName()}</ul>
      </div>
    );
  }
}

export default AllBeers;

