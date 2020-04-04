import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ name, customClass }) => {
    if (!name) return false;
    const className = `icons icons-${name} ${customClass}`;
    return <i className={className} />;
};

Icons.propTypes = {
    name: PropTypes.string,
    customClass: PropTypes.string,
};

Icons.defaultProps = {
    name: '',
    customClass: '',
};

export default Icons;
