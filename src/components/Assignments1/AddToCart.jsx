import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icons from '../common/Icons';

const MAXIMUM_STOK_MESSAGE = 'Maximum Stok!';
const REMOVED_MESSAGE = 'Silindi';
const UPDATED_MESSAGE = 'Güncellendi';
const ADDED_MESSAGE = 'Eklendi';

const AddToCart = ({ basket, maxCount }) => {
    const [count, setCount] = useState((basket && basket.count) ? basket.count : 0);
    const [message, setMessage] = useState('');

    const isMaxCount = value => value > maxCount;

    const getInfoMessage = value => {
        if (value > maxCount) {
            return MAXIMUM_STOK_MESSAGE;
        }

        if (value === 0) {
            return REMOVED_MESSAGE;
        }

        if (value > 0) {
            return UPDATED_MESSAGE;
        }

        return ADDED_MESSAGE;
    };

    const setInfoMessage = value => {
        const infoMessage = getInfoMessage(value);

        setMessage(infoMessage);

        setTimeout(() => {
          setMessage('');
        }, 1000);
    };

    const changeProductCount = value => {
        setCount(isMaxCount(value) ? maxCount : value);
        setInfoMessage(value);
    };

    const onBlurSetProductCount = () => {
        if(isMaxCount(count)) {
            setCount(maxCount);
        }
        setInfoMessage(count);
    };

    const addFirstProduct = value => {
        setCount(value);
        setInfoMessage(-1);
    };

    return (
        <div className="add-to-chart-container position-relative">
            {message && <div className={`add-to-chart__info-message ${message === MAXIMUM_STOK_MESSAGE ? 'danger--message' : ''}`}>{message}</div>}
            {count > 0 ?
                <div className="add-to-chart">
                    <button
                        type="button"
                        className="btn d-flex"
                        onClick={() => changeProductCount(count - 1)}
                    >
                        <Icons name={count > 1 ? 'minus' : 'trash'} />
                    </button>
                    <input
                        type="number"
                        className="h-100 p-1 ml-1 mr-1 border-0 text-center"
                        value={count}
                        onChange={e => setCount(Number(e.target.value))}
                        onBlur={onBlurSetProductCount}
                    />
                    <button
                        type="button"
                        className="btn d-flex"
                        onClick={() => changeProductCount(count + 1)}
                    >
                        <Icons name="plus" />
                    </button>
                </div>
                :
                <button
                    type="button"
                    className="add-to-chart"
                    onClick={() => addFirstProduct(count + 1)}
                >
                    Sepete Ekle
                </button>
            }
        </div>
    );
};

AddToCart.propTypes = {
    maxCount: PropTypes.number,
    basket: PropTypes.object,
};
AddToCart.defaultProps = {
    maxCount: 0,
    basket: {},
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
