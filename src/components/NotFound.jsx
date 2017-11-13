import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            404! - <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFound;
