import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency})=>{
                    return (<tr key = {id}>
                        <td>{type}</td>
                        <td>1{amount}</td>
                        <td>{currency}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};

export default TransactionHistory;
