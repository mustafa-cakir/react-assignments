import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import {
    URL_ASSIGNMENTS_1,
    URL_ASSIGNMENTS_2,
    URL_ASSIGNMENTS_3,
    URL_ASSIGNMENTS_4,
    URL_ASSIGNMENTS_5,
    URL_HOMEPAGE,
} from '../../core/routes/constants';
import './Style.scss';

const Header = () => {
    const [isHamBtnOpen, setIsHamBtnOpen] = useState(false);

    const hamBtnClickToggle = () => {
        setIsHamBtnOpen(!isHamBtnOpen);
    };

    const closeHamBtn = () => {
        setIsHamBtnOpen(false);
    };
    return (
        <header className={isHamBtnOpen ? 'opened' : ''}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to={URL_HOMEPAGE} title="Homepage" className="logo" exact>
                        <img src={logo} alt="Homepage" />{' '}
                        <div>
                            <strong>REACT</strong>ASSIGNMENTS
                            <div className="subtitle">by Mustafa Çakır</div>
                        </div>
                    </NavLink>
                    <ul className="nav-list">
                        <li>
                            <NavLink
                                onClick={closeHamBtn}
                                to={URL_ASSIGNMENTS_1}
                                className="btn link"
                                title="Assignment 1"
                                activeClassName="active"
                            >
                                Assignment 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHamBtn}
                                to={URL_ASSIGNMENTS_2}
                                className="btn link"
                                title="Assignment 1"
                                activeClassName="active"
                            >
                                Assignment 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHamBtn}
                                to={URL_ASSIGNMENTS_3}
                                className="btn link"
                                title="Assignment 1"
                                activeClassName="active"
                            >
                                Assignment 3
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHamBtn}
                                to={URL_ASSIGNMENTS_4}
                                className="btn link"
                                title="Assignment 1"
                                activeClassName="active"
                            >
                                Assignment 4
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeHamBtn}
                                to={URL_ASSIGNMENTS_5}
                                className="btn link"
                                title="Assignment 1"
                                activeClassName="active"
                            >
                                Assignment 5
                            </NavLink>
                        </li>
                    </ul>
                    <button type="button" className="ham-button" onClick={hamBtnClickToggle}>
                        <span className="ham-border ham-border-top">
                            <span className="ham-border-inner ham-border-inner-top" />
                        </span>
                        <span className="ham-border ham-border-bottom">
                            <span className="ham-border-inner ham-border-inner-bottom" />
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
