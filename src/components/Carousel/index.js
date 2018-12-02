import React, { Component } from 'react';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import Slide from '../Slide'
import Thumbnails from '../Thumbnails';
import NavigateButtonContainer from '../NavigateButtonContainer'
import RightArrow from '../RightArrow'
import LeftArrow from '../LeftArrow'
import './index.scss'


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.setCurrentImageIndex = this.setCurrentImageIndex.bind(this)
    }
    nextImage(e) {
        if (this.props.images.length - 1 === this.state.activeIndex) {
            this.setState({ activeIndex: 0 })
        } else {
            this.setState({ activeIndex: this.state.activeIndex + 1 })
        }
    }

    prevImage(e) {
        if (0 === this.state.activeIndex) {
            this.setState({ activeIndex: this.props.images.length - 1 })

        } else {
            this.setState({ activeIndex: this.state.activeIndex - 1 })
        }

    }
    setCurrentImageIndex(index) {

        if (index !== 'undefined' && index >= 0) {
            this.setState({ activeIndex: index })
        }

    }
    render() {
        let image = this.props.images[this.state.activeIndex]
        return (

            <Container fluid={true} className="carousel-container">
                <Thumbnails images={this.props.images} onClickHandler={this.setCurrentImageIndex} />
                <Row justify="center">
                    <Col xs={12} sm={12} lg={10} md={10}>

                        <ul className="carousel">

                            <li className="center-slide">
                            <Visible xs sm md>
                                    <LeftArrow prevImage={this.prevImage} />
                                </Visible>
                              <Slide id="contentCarousel"
                                    image={image}
                                    width="100%"
                                    height="480px"
                                    index={this.state.activeIndex}
                                    onClickHandler={this.setCurrentImageIndex}
                                />
                                <Visible xs sm md>
                                    <RightArrow nextImage={this.nextImage} />
                                </Visible>
                                <h3>By {image.user}</h3>
                            </li>
                        </ul>
                        <NavigateButtonContainer prevImage={this.prevImage} nextImage={this.nextImage} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

