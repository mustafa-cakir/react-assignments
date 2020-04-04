import React from 'react';
import PropTypes from 'prop-types';

const AddToCart = ({ basket, maxCount }) => {
    return (
        <div>
            add to cart button <div>will be here....</div>
            icons:
        </div>
    );
};

AddToCart.propTypes = {
    //
};
AddToCart.defaultProps = {
    //
};

export default AddToCart;

/*
==================================================================================================
    addtocart.jsx -> <AddToCart basket={} maxCount={} />
    This component responsible rendering the "add to cart button",
    - it gets "basket" object from the upper component
    - It has its local state to hold the default count (from basket.count) and updates it accordingly
    - A gray small notification text, above the button, will be visible to users for 1 seconds upon any action (guncellendi, silindi, eklendi)
    - User can't increase the quantity more than the in-stock number, which is passed to this component via maxCount prop.

    Attention:
    - NO NEED TO APPLY THE LOADING EFFECT you see in the GIF animation. Since you are not making any
    UPDATE/DELETE post request to anywhere, the loading animation is not necesary, everything will be instant.
    - Make sure to declare the propTypes and defaultProps for the props that this compoennt accepts.

    Necessary Icons:
    minus icon: <Icons name="minus" />
    plus icon: <Icons name="plus" />
    remove icon: <Icons name="trash" />

============== ====================================================================================
*/
