export const setTextFilter =
    (text='') => ({
        type: 'SET_TEXT_FILTER',
        text
    });

export const sortByDate =
    () => ({
        type: 'SORT_BY_DATE',
    });

export const sortByAmount =
    () => ({
        type: 'SORT_BY_AMOUNT',
    });

export const setStartDate =
    (startDate) => ({
        type: 'SET_START_DATE',
        startDate
    });

export const setEndDate =
    (endDate) => ({
        type: 'SET_END_DATE',
        endDate
    });


//function mapStateToProps(state, ownProps) {
//    return { whatever: state.whatever }
//}
//or
//const mapStateToProps = state => ({
//    articles: state.articles
//});


// .defaultProps = {};
// .propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// export default ;
