import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, onClick }) => {
    //console.log("the onclick function returns = " + onClick);
    //console.log("the names are = " + name);
    return (
        <div className="cart-item">
            <div>
                <span className="cart-item__name">{name}</span>
                <button className="btn btn-danger btn-xs btn-custom" onClick={onClick}>Remove</button>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
