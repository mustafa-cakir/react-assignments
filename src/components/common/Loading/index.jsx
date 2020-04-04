import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ type }) => {
    return <div className={`loading ${type}`}>loading...</div>;
};

Loading.propTypes = {
    type: PropTypes.string,
};

Loading.defaultProps = {
    type: '',
};

export default Loading;
