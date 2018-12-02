import React, { Component, Fragment } from 'react';
import {Visible} from 'react-grid-system'
class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { image, width, height, index } = this.props;
        let alt = image.tags? image.tags.split(',').join(' and '):'image';
  
        return (
            <Fragment>
                <Visible md lg xl>
                <img width={width} alt={alt} onClick={() => this.props.onClickHandler(index)} height={height} src={image.webformatURL} />
                </Visible>
                <Visible xs sm>
                <img width={width} alt={alt} onClick={() => this.props.onClickHandler(index)} src={image.webformatURL} />
                </Visible>
            </Fragment>
        );
    }
}

export default Slide;