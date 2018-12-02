import React, { Component } from 'react';
import Header from '../Header'
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
           images && images.length>=1 ? <Header />:<h3>Loading...</h3>
        );
    }
}

export default App;