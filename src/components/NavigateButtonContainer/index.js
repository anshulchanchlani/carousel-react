import React, { Component } from 'react';
import { Visible } from 'react-grid-system';
import NavigateButton from '../NavigateButton';
import './index.scss'
class NavigateButtonContainer extends Component {

    render() {
        return (
            <ul className="desktop-navigate-buttons">
            <li className="button-navigate border-prev-button"><Visible lg xl>
                     <NavigateButton onClickHandler={this.props.prevImage} buttonText="Prev"/>
                </Visible></li>
            <li className="button-navigate border-next-button"><Visible lg xl>
                     <NavigateButton   onClickHandler={this.props.nextImage} buttonText="Next"/>
                </Visible></li>
        </ul>
        );
    }
}

export default NavigateButtonContainer;