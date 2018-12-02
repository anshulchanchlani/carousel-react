import React, { Component } from 'react';

class NavigateButton extends Component {

    render() {
        let {buttonText,onClickHandler} = this.props;
        return (
                <button onClick={onClickHandler} >{buttonText}</button>
        );
    }
}

export default NavigateButton;