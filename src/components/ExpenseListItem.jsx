import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// or 'react-router', if version < 4

export
const ExpenseListItem = ({description, amount, createdAt, id}) => {
    // no lifecycle methods
    // no refs


    return (
        <div className="expense-list-item">
            {/*<a onClick={methodName}>Do It</a>       // note no need to call 'this'*/}
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>

        </div>
    );
};


// ExpenseListItem.defaultProps = {};
// ExpenseListItem.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default ExpenseListItem;
