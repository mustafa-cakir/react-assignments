import React from 'react';
import Icons from '../common/Icons';
import { printPrice, printExpiration } from './utils';

const Assignments2Container = () => {
    return (
        <>
            <h1 className="mb-4">Assignment 2</h1>
            <p>
                The purpose of this assignment is to return proper JSX using the common utility methods. Make the common
                method type-validated and return proper JSX, based on the arguments provided.
            </p>

            <div className="row">
                <div className="col col-12 col-lg-9">
                    <div className="mb-5">
                        <h3 className="mt-4">
                            printPrice(pruce: <span className="text-light">number</span>, toFixDecimal:{' '}
                            <span className="text-light">number</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> printPrice() method accepts 2 arguments and returns React JSX
                                object.
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>printPrice(123.2000, 2)</code>
                            </div>
                            <div className="mb-2">
                                Expected:{' '}
                                <span className="text-price">
                                    123,<span className="price-sub">20 TL</span>
                                </span>
                            </div>
                            <div>Result: {printPrice(123.2, 2)}</div>
                        </div>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>printPrice(1234)</code>
                            </div>
                            <div className="mb-2">
                                Expected:{' '}
                                <span className="text-price">
                                    1234,<span className="price-sub">00 TL</span>
                                </span>
                            </div>
                            <div>Result: {printPrice(1234)}</div>
                        </div>
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>printPrice(0)</code>
                            </div>
                            <div className="mb-2">
                                Expected:{' '}
                                <span className="text-price">
                                    0,<span className="price-sub">00 TL</span>
                                </span>
                            </div>
                            <div>Result: {printPrice(0)}</div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="mt-4">
                            printExpiration(date: <span className="text-light">string|null</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> printExpiration() method accepts 1 argument and returns string
                            </li>
                            <li className="mb-1">
                                <Icons name="okay" /> if date is null, then "Mıadsız" text should be returned.
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>printExpiration('2021-11-01T00:00:00')</code>
                            </div>
                            <div className="mb-2">Expected: Kasım 2021</div>
                            <div>Result: {printExpiration('2021-11-01T00:00:00')}</div>
                        </div>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>printExpiration(null)</code>
                            </div>
                            <div className="mb-2">Expected: Mıadsız Ürün</div>
                            <div>Result: {printExpiration(null)}</div>
                        </div>
                        <hr />
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
                                <li>/src/components/Assignment2/utils.js</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <Icons name="okay" /> Use "moment" npm package to format the dates, which is already exist
                            in the package.json
                        </li>
                    </ul>
                    <h3 className="mt-4 mb-2">Bonus:</h3>
                    <ul>
                        <li className="mb-2">
                            <Icons name="okay" /> Make methods type-validated.
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

export default Assignments2Container;
