import React, { Component,Fragment } from 'react';
import Header from '../Header'
import Carousel from '../Carousel'
import { getImages } from '../../services/api';
import './index.scss'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { images: null }
    }
    componentDidMount() {

        let self = this;
        //Explicitly sending 6 images.
        getImages()
            .then((results) => {
                self.setState({ images: results.slice(0, 6) })
            })
    }
    render() {
        let images = this.state.images;
        return (
            <Fragment>
                <Header />
                {images && images.length > 0 && <Carousel images={this.state.images} />}
            </Fragment>
        );
    }
}

export default App;