import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import AddToCart from './AddToCart';

const Item = ({ expiration, stock, price, product, basket }) => {
    const { imageUrl, name, listingCount, listingMinPrice } = product;
    const expirationDate = moment(expiration).format('MMMM YYYY');
    const replacedImageUrl = imageUrl.replace('com.tr//', 'com.tr/');

    return (
        <div className="row align-items-center item pl-3 pr-1 mt-4">
            <div className="col-1 p-0">
                <img src={replacedImageUrl} alt="product" />
            </div>
            <div className="col-4">
                <div className="d-flex flex-column product-name">
                    <span>{name}</span>
                    <div className="d-none d-lg-block">
                        <button type="button" className="btn link">{listingMinPrice.toFixed(2)} TL'den başlayan {listingCount} ilan</button>
                    </div>
                </div>
            </div>
            <div className="col-2 mr-2 mr-md-0">
                {expirationDate}
            </div>
            <div className="col-1 mr-4 mr-md-0">
                {stock}
            </div>
            <div className="col-2 text-right">
                {price.toFixed(2)} TL
            </div>
            <div className="col-md-2 pl-0 pr-0 pl-md-2 mt-4 mt-md-0">
                <AddToCart basket={basket} maxCount={stock} />
            </div>
        </div>
    );
};

Item.propTypes = {
    expiration: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    product: PropTypes.object,
    basket: PropTypes.object,
};

Item.defaultProps = {
    expiration: '',
    stock: 0,
    price: 0,
    product: {},
    basket: {},
};

export default Item;

/*
==================================================================================================
    Item.jsx -> <Item item={} />
    This component will be responsible render item that is passed from Items component.
    - Call the addtoCart child component to handle the addtoCart action;
    - Use "moment" package (which is already imported to this file) to format the expiration date from "2022-04-01T00:00:00" to "Nisan 2020"

    Attention:
    - Make sure to declare the propTypes and defaultProps for the props that this compoennt accepts.
==================================================================================================
*/
