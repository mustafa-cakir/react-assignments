import React from 'react';
import Icons from '../common/Icons';
import { convertArrayToObject, calculateTotalPrice } from './utils';

const Assignments4Container = () => {
    const sampleArray = [
        {
            id: 1031275,
            price: 22.42,
            productId: 37582,
            productName: 'Ocean Omega 3 Balık Yağı 500 mg 60 Kapsül',
            basketId: 8973605,
            basketCount: 2,
        },
        {
            id: 1023748,
            price: 130.0,
            productId: 126949,
            productName: 'Plentyfert For Woman 30 Tablet',
            basketId: null,
            basketCount: 0,
        },
    ];

    const sampleArrayExpected = {
        1031275: {
            price: 22.42,
            product: {
                id: 37582,
                name: 'Ocean Omega 3 Balık Yağı 500 mg 60 Kapsül',
            },
            basket: {
                id: 8973605,
                count: 2,
            },
        },
        1023748: {
            price: 130.0,
            product: {
                id: 126949,
                name: 'Plentyfert For Woman 30 Tablet',
            },
            basket: null,
        },
    };

    return (
        <>
            <h1 className="mb-4">Assignment 4</h1>
            <p>The purpose of this assignment is to work with objects and array.</p>

            <div className="row">
                <div className="col col-12 col-lg-9">
                    <div className="mb-5">
                        <h3 className="mt-4">
                            convertArrayToObject(arr: <span className="text-light">array</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> convertArrayToObject() method accepts 1 argument and returns an
                                object
                            </li>
                            <li className="mb-1">
                                <Icons name="okay" /> The purpose of this method is to manipulate the given array and
                                transforms it into object.
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                <div>Given:</div>
                                <code>
                                    <pre>
                                        const sampleArray = {JSON.stringify(sampleArray, null, 2)};
                                        <br />
                                        convertArrayToObject(sampleArray)
                                    </pre>
                                </code>
                            </div>
                            <div className="mb-2">
                                <div>Expected:</div>
                                <code>
                                    <pre>{JSON.stringify(sampleArrayExpected, null, 2)}</pre>
                                </code>
                            </div>
                            <div className="mb-2">
                                <div>Result:</div>
                                <code>
                                    <pre>{JSON.stringify(convertArrayToObject(sampleArray), null, 2)}</pre>
                                </code>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="mt-4">
                            calculateTotalPrice(arr: <span className="text-light">array</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> calculateTotalPrice() method accepts 1 argument and returns a
                                number
                            </li>
                            <li className="mb-1">
                                <Icons name="okay" /> The purpose of this method is to return the total price of
                                products within the data.
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                <div>Given:</div>
                                <code>
                                    <pre>
                                        const sampleArray = {JSON.stringify(sampleArray, null, 2)};
                                        <br />
                                        calculateTotalPrice(sampleArray)
                                    </pre>
                                </code>
                            </div>
                            <div className="mb-2">
                                <div>Expected: 152.42</div>
                            </div>
                            <div className="mb-2">
                                <div>Result:</div>
                                <code>{calculateTotalPrice(sampleArray)}</code>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-lg-3">
                    <h3 className="mt-4 mb-2">Tips:</h3>
                    <ul>
                        <li className="mb-2">
                            <Icons name="okay" /> Don't create a new file.
                        </li>

                        <li className="mb-2">
                            <Icons name="okay" /> Edit only this file:
                            <ul className="text-dark-gray ml-4">
                                <li>/src/components/Assignment4/utils.js</li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className="mt-4 mb-2">Bonus:</h3>
                    <ul>
                        <li className="mb-2">
                            <Icons name="okay" /> Make methods type-validated
                        </li>
                        <li className="mb-2">
                            <Icons name="okay" /> Each method should have its own JSDoc comment
                        </li>
                        <li className="mb-2">
                            <Icons name="okay" /> Take into account the empty/null situations.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Assignments4Container;
