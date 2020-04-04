import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';

const Error = ({ statusCode, type, message }) => {
    return (
        <div className="error">
            <div className="mb-3">Error Occured</div>
            {statusCode && (
                <div>
                    <strong>StatusCode: </strong>
                    {statusCode}
                </div>
            )}
            {type && (
                <div>
                    <strong>Type: </strong>
                    {type}
                </div>
            )}
            {message && (
                <div>
                    <strong>Message: </strong>
                    {message}
                </div>
            )}
        </div>
    );
};

Error.propTypes = {
    statusCode: PropTypes.number,
    type: PropTypes.string,
    message: PropTypes.string,
};

Error.defaultProps = {
    statusCode: null,
    type: null,
    message: null,
};

export default Error;
