import React, { Component, Fragment } from 'react';
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
                <img width={width} alt={alt} onClick={() => this.props.onClickHandler(index)} height={height} src={image.webformatURL} />
            </Fragment>
        );
    }
}

export default Slide;