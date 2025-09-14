import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styled from './index.css'

class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName={styled.flyin} className="list-group-item" {...this.props}></NavLink>
    );
  }
}

export default MyNavLink;
