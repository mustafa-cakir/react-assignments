import React from 'react';
// import Loading from '../common/Loading';
// import axios from 'axios';
// import { GET__API_GET_LISTING_ITEMS } from '../../core/routes/apis';

const Items = () => {
    return (
        <div className="p-3">
            <code>your code will be here...</code>
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
