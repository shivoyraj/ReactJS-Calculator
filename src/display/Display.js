import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
    return (
        <input
            className={`display ${props.isError ? ' error' : ''}`}
            type="text"
            value={props.value}
            readOnly
        />
    );
}

Display.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Display;