import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cart from './Cart';

configure({ adapter: new Adapter() });

describe('cart', () => {

    const cart = shallow(<Cart />);

    it('renders correctly', () => {
        expect(cart).toMatchSnapshot();
    });

});