import React from 'react';
import Header from '../../../src/components/Header'
import {shallow} from 'enzyme';

test('Header renders',()=>{
    const component = shallow(<Header/>); 
    expect(component.find('h1')).toHaveLength(1);
    expect(component).toMatchSnapshot();
})
