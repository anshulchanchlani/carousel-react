

import images from '../setup/dummy'
import mockAxios from 'jest-mock-axios';
import {getImages} from '../../src/services/api';


it('Test for api call',()=>{
    let catchFn = jest.fn(),
        thenFn = jest.fn();

    const response = getImages();

    mockAxios.mockResponse(images);
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
    expect(response.data.hits).toBeDefined();
    expect(response.data.hits).toEqual(expect.arrayContaining(images.hits));
   
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
})