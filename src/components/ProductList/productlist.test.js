import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductList from './ProductList';

configure({ adapter: new Adapter() });

describe('ProductList', () => {

    const productlist = shallow(<ProductList />);

    it('renders correctly', () => {
        expect(productlist).toMatchSnapshot();
    });

});