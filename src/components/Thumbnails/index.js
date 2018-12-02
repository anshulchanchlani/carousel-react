import React, { Component } from 'react';
import { Row, Col, Visible } from 'react-grid-system';
import Slide from '../Slide'
import './index.scss'
class Thumbnails extends Component {
    render() {
        let { images,onClickHandler } = this.props;
        let slides = [];
        for(let i=0;i<images.length;i++){
            let img = images[i]
            slides.push(
                <li className="thumbnails-item" key={img.id}><Slide 
                          onClickHandler={onClickHandler}
                          index={i}
                          image={img}
                          width={img.previewWidth}
                          height="100" />
                    <h5>By: {img.user}</h5>
                </li> 
            )
        }
        
        return (
            <Row className="thumbnails">
                <Col  lg={12} xl={12}>
                     
                    <Visible lg xl>
                        <ul className="thumbnails-list">
                             {slides}
                       </ul>
                    </Visible>

                </Col>
            </Row>
        );
    }
}

export default Thumbnails;