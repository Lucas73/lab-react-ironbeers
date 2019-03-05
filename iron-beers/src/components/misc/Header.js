import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div>
<div className="navbar row is-four-fifths is-light
" role="button" aria-label="main navigation">
<NavLink to="/" className="navbar-item">IronBeers</NavLink>
  <div className="navbar-brand">

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Beers
      </a>

      <a className="navbar-item">
        Random Beer
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-item">
          New Beer
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  )