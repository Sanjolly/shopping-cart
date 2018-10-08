import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './Product';

configure({ adapter: new Adapter() });

describe('Empty Cart', () => {

    const productlist = shallow(<ProductList />);

    it('renders correctly', () => {
        expect(productlist).toMatchSnapshot();
    });

});