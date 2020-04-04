import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
    return (
        <div>
            Each item will <div>be here....</div>
        </div>
    );
};

Item.propTypes = {
    //
};

Item.defaultProps = {
    //
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
