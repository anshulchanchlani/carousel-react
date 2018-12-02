import React, { Component } from 'react';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import Slide from '../Slide'
import './index.scss'


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }
    render() {
        let image = this.props.images[this.state.activeIndex]
        return (

            <Container fluid={true} className="carousel-container">

                <Row justify="center">
                    <Col xs={12} sm={12} lg={10} md={10}>

                        <ul className="carousel">

                            <li className="center-slide">


                                <Slide id="contentCarousel"
                                    image={image}
                                    width="100%"
                                    height="480px"
                                    index={this.state.activeIndex}
                                    onClickHandler={this.setCurrentImageIndex}
                                />


                                <h3>By {image.user}</h3>
                            </li>

                        </ul>

                    </Col>
                </Row>
            </Container>
        );
    }
}

