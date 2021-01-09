import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../common/Loading';
import Error from '../common/Error';

import { GET__API_GET_LISTING_ITEMS } from '../../core/routes/apis';

import Item from './Item';

const LOADING = 1;
const FAILED = 2;
const LOADED = 3;

const Items = () => {
    const [itemsReq, setItemsReq] = useState({
        products: [],
        reason: null,
        status: LOADING,
    });
    const { products, reason, status } = itemsReq;

    const getItems = () => {
        axios.get(GET__API_GET_LISTING_ITEMS)
            .then(({ data }) => {
                setItemsReq({
                    products: data.result,
                    reason: data.errors,
                    status: LOADED,
                })
            })
            .catch(error => {
                setItemsReq({
                    products: [],
                    reason: error,
                    status: FAILED,
                })
            });
    }

    useEffect(() => {
        getItems();
    }, []);

    const renderItemList = () => products.map(item => {
        const { id, expiration, price, product, basket, stock } = item;

        return (
            <Item
                key={id}
                expiration={expiration}
                price={price}
                product={product}
                stock={stock}
                basket={basket}
            />
        )
    });

    return (
        <div className="p-3">
            {status === LOADING &&
                <Loading />
            }
            {reason &&
                <Error message={reason} />
            }
            {(status === LOADED && reason === null && products.length > 0) &&
                <div className="container p-0">
                    <div className="row header pb-2 pl-3 pr-1">
                        <div className="col-1" />
                        <div className="col-4">
                            Ürün Adı
                        </div>
                        <div className="col-2">
                            Miad
                        </div>
                        <div className="col-1 mr-4 mr-md-0">
                            Stok
                        </div>
                        <div className="col-2 text-right">
                            Fiyat
                        </div>
                        <div className="col-2" />
                    </div>
                    {renderItemList()}
                </div>
            }
        </div>
    );
};

export default Items;

/*
==================================================================================================
    Items.jsx -> <Items />
    This component will be responsible to make the Axios request, get the data,
    hold the states, map the data, and call the shild component (Item) for each item..

    - Use axios to make the reqquest
    - the URL to make request is GET__API_ASSIGNMENT_1_ITEMS which is already imported to this file.
    - After you make the API request, you will essentially get the content of this JSON: /public/api/dummyData/getIListingtems.json
    - This JSON file contains all the necessary information to render the items, maxStock, already in the cart etc..
    - Use <Loading /> common component (/src/components/common/Loading), to show the loading indication to user; while Axios request is pending.
    - Use <Error /> common component (/src/components/common/Error) to display any axios error to the user
    - In case axios throws an error, catch the error string message and pass it to error component, as <Error message={} />
============== ====================================================================================
*/
