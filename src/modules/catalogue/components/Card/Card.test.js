import React from 'react';
import { shallow } from 'enzyme';
import Card from 'modules/catalogue/components/Card';

describe('Card', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card />);
    });

    it('should run test', () => {
        expect(true).toEqual(true);
    });

    it('should render ', () => {

    });
})