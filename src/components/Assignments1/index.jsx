import React from 'react';
import gifAssignment1 from '../../assets/gif/assignment1.gif';
import './Style.scss';
import Items from './Items';
import Icons from '../common/Icons';

const Assignments1Container = () => {
    return (
        <>
            <h1>Assignment 1</h1>
            <p>
                In this assignment, the purpose is to get the layout and the functionality using a given productList
                data; by referencing the GIF animations below.
            </p>

            <div className="row">
                <div className="col col-12 col-lg-9">
                    <h3 className="mt-4 mb-2">Expected Layout & Functionality:</h3>
                    <img src={gifAssignment1} alt="GIF Assignment1" />
                    <h3 className="mt-4 mb-2">Result:</h3>
                    <div className="assignment1">
                        <Items />
                    </div>
                </div>
                <div className="col col-12 col-lg-3">
                    <h3 className="mt-4 mb-2">Tips:</h3>
                    <ul>
                        <li className="mb-2">
                            <Icons name="okay" /> Use <code>btn</code> and <code>link</code> classes to get purple
                            anchor links
                        </li>
                        <li className="mb-2">
                            <Icons name="okay" /> Don't create a new file.
                        </li>

                        <li className="mb-2">
                            <Icons name="okay" /> Edit only the files below:
                            <ul className="text-dark-gray ml-4">
                                <li>/src/components/Assignment1/Items.jsx</li>
                                <li>/src/components/Assignment1/Item.jsx</li>
                                <li>/src/components/Assignment1/AddToCart.jsx</li>
                                <li>/src/components/Assignment1/Style.scss</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <Icons name="okay" /> Each file has its own description at the bottom
                        </li>
                    </ul>
                    <h3 className="mt-4 mb-2">Bonus:</h3>
                    <ul>
                        <li className="mb-2">
                            <Icons name="okay" /> Make component responsive using only brootstrap classes.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Assignments1Container;
