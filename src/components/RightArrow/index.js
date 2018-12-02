import React, { Component } from 'react';
import './index.scss'
export default class RightArrow extends Component {

  render() {
    return (
       
        <img onClick={this.props.nextImage} alt="Left Arrow" width="20" height="20px" className="right-arrow float-right" height="60%" src="./images/arrow.svg" alt="Right Arrow" />
 
    );
  }
}

