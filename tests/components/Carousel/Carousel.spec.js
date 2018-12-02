import React from 'react';
import Carousel from '../../../src/components/Carousel'
import LeftArrow from '../../../src/components/LeftArrow';
import RightArrow from '../../../src/components/RightArrow';
import ImageNavButton from '../../../src/components/NavigateButton'
import {shallow} from 'enzyme';
import imagesObject from '../../setup/dummy';
const images = imagesObject.hits.slice(0,6);
describe('Carousel Tests',()=>{
    const component = shallow(<Carousel images={images}/>); 
    it('Carousel renders',()=>{
        
        expect(component.find('Container')).toHaveLength(1);
        expect(component.find('Thumbnails')).toHaveLength(1);
        expect(component.find('LeftArrow')).toHaveLength(1);
        expect(component.find('RightArrow')).toHaveLength(1);
        expect(component.find('Slide')).toHaveLength(1);
        expect(component.find('NavigateButtonContainer')).toHaveLength(1);
        expect(component).toMatchSnapshot();
    })
    it('Check left arrow click',()=>{
        const prevImage = jest.fn();
        const leftArrow = shallow(<LeftArrow prevImage={prevImage}/>)
        leftArrow.find('img').simulate('click');
        expect(prevImage.mock.calls.length).toBe(1)
    })
    it('Check right arrow click',()=>{
        const nextImage = jest.fn();
        const rightArrow = shallow(<RightArrow nextImage={nextImage}/>)
        rightArrow.find('img').simulate('click');
        expect(nextImage.mock.calls.length).toBe(1)
    })
    it('Check button clicks for changing image',()=>{
        const imageChangeHandler = jest.fn();
        const button = shallow(<ImageNavButton buttonText="Next" onClickHandler={imageChangeHandler}/>)
        button.simulate('click');
        expect(imageChangeHandler.mock.calls.length).toBe(1)
    })
})

