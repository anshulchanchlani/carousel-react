import React, { Component } from 'react';
import './index.scss'
export default class LeftArrow extends Component {
  
  render() {
    return (
     
      <img onClick={this.props.prevImage} alt="Left Arrow" width="20" height="20" className="left-arrow" src="./images/arrow.svg" alt="Left Arrow"/>
    
    );
  }
}

