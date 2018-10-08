import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        
        const { id, addToCart, removeFromCart, isInCart } = this.props;
        //console.log("the id is = " + this.props.id);
        console.log("the item is in cart = " + isInCart);

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price,image, isInCart } = this.props;
        //console.log("the image src is = " + image);
         return (
            <div className="shopping-container">
                
                <div className="caption">
                    <h3>{name}</h3>
                    <img src={image} alt="product" />
                    <div className="product__price">{price}</div>
                    <div className="addToCart">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
