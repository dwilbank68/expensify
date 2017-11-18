import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export
const ExpenseListItem = ({description, amount, createdAt, id}) => {

    return (
        <div className="expense-list-item">
            {/*<a onClick={methodName}>Do It</a>       // note no need to call 'this'*/}
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {numeral(amount/100).format('$0,0.00')}
                -
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>

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
