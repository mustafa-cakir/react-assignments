import React from 'react';
import homeAnimation from '../../assets/images/homeAnimation.gif';
import './Style.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <h6 className="text-light"> Please click one of the assignments from the header tab.</h6>
            <div className="my-4">
                <em>"Code is like humor. When you have to explain it, it’s bad." – Cory House</em>
            </div>

            <div className="my-4">
                <img src={homeAnimation} alt="Homepage programing" />
            </div>

            <div className="my-4">
                <code>
                    created by{' '}
                    <a
                        href="https://www.linkedin.com/in/mustafackr"
                        className="btn link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mustafa Cakir
                    </a>
                </code>
            </div>
        </div>
    );
};

export default Homepage;
