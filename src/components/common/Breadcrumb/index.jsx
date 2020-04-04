import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { URL_HOMEPAGE } from '../../../core/routes/constants';
import './Style.scss';

const Breadcrumb = ({ data }) => {
    if (!data || data.length < 1) return false;
    return (
        <div className="breadcrumb">
            <ul>
                <li>
                    <Link to={URL_HOMEPAGE} title="Homepage" className="btn link">
                        Homepage
                    </Link>
                </li>
                {data.map((item) => (
                    <li key={item.id}>
                        <div className="mx-2">/</div>
                        {item.url ? (
                            <Link to={item.url} title={item.label} className="btn link">
                                {item.label}
                            </Link>
                        ) : (
                            <div>{item.label}</div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Breadcrumb.propTypes = {
    data: PropTypes.array,
};

Breadcrumb.defaultProps = {
    data: [],
};

export default Breadcrumb;
