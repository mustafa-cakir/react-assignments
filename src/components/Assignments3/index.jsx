import React from 'react';
import Icons from '../common/Icons';
import { toggleValueInArray, captializeFirstLetter } from './utils';

const Assignments3Container = () => {
    const originalArray = [1, 2, 3, 4];

    return (
        <>
            <h1 className="mb-4">Assignment 3</h1>
            <p>The purpose of this assignment is to create common methods to manipulate the data.</p>

            <div className="row">
                <div className="col col-12 col-lg-9">
                    <div className="mb-5">
                        <h3 className="mt-4">
                            toggleValueInArray(arr: <span className="text-light">array</span>, value:{' '}
                            <span className="text-light">number|string</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> toggleValueInArray() method accepts 2 arguments and returns an
                                array
                            </li>
                            <li className="mb-1">
                                <Icons name="okay" /> The purpose of this method is to toggle in the array and return
                                the new result.
                            </li>
                            <li className="mb-1 ml-3">
                                - If value is already exist in the array, then remove it and return the new array.
                            </li>
                            <li className="mb-1 ml-3">
                                - If value is not exist, then add it and return the new array.
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                <div>Given:</div>
                                <div className="my-2">
                                    <code>
                                        const originalArray = [1,2,3,4]
                                        <br />
                                        const newArray = toggleValueInArray(originalArray, 2)
                                    </code>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div>Expected:</div>
                                <div className="my-2">
                                    <code>
                                        originalArray: [1,2,3,4]
                                        <br />
                                        newArray: [1,3,4]{' '}
                                    </code>
                                </div>
                            </div>
                            <div>
                                <div>Result:</div>
                                <div className="my-2">
                                    <code>
                                        originalArray: {JSON.stringify(originalArray)}
                                        <br />
                                        newArray: {JSON.stringify(toggleValueInArray(originalArray, 2))}
                                    </code>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                <div>Given:</div>
                                <div className="my-2">
                                    <code>
                                        const originalArray = [1,2,3,4]
                                        <br />
                                        const newArray = toggleValueInArray(originalArray, "mustafa")
                                    </code>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div>Expected:</div>
                                <div className="my-2">
                                    <code>
                                        originalArray: [1,2,3,4]
                                        <br />
                                        newArray: [1,3,4, "mustafa"]
                                    </code>
                                </div>
                            </div>
                            <div>
                                <div>Result:</div>
                                <div className="my-2">
                                    <code>
                                        originalArray: {JSON.stringify(originalArray)}
                                        <br />
                                        newArray: {JSON.stringify(toggleValueInArray(originalArray, 'mustafa'))}
                                    </code>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="mb-5">
                        <h3 className="mt-4">
                            captializeFirstLetter(word: <span className="text-light">string</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> captializeFirstLetter() method accepts 1 arguments and returns a
                                string
                            </li>
                            <li className="mb-1">
                                <Icons name="okay" /> The purpose of this method is to capitalize the 1st letter
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>captializeFirstLetter('mustafa')</code>
                            </div>
                            <div className="mb-2">
                                <div>Expected: Mustafa</div>
                            </div>
                            <div>
                                Result: <code>{captializeFirstLetter('mustafa')}</code>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className="mt-4">
                            manipulateData(arr: <span className="text-light">array</span>)
                        </h3>
                        <ul className="m-3">
                            <li className="mb-1">
                                <Icons name="okay" /> manipulateData() method accepts 1 arguments and returns an object
                            </li>
                            <li className="mb-1">
                                <Icons name="okay" /> The purpose of this method is to manipulate the given date and
                                transforms it into a different set of data.
                            </li>
                        </ul>
                        <hr />
                        <div className="my-4 ml-5">
                            <div className="mb-2">
                                Given: <code>captializeFirstLetter('mustafa')</code>
                            </div>
                            <div className="mb-2">
                                <div>Expected: Mustafa</div>
                            </div>
                            <div>
                                Result: <code>{captializeFirstLetter('mustafa')}</code>
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
                                <li>/src/components/Assignment3/utils.js</li>
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

export default Assignments3Container;
