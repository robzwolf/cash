import styles from './amount.module.css'
import formatAmount from "../../utils/amountformatter";
// import FormattedAmount from "../formattedamount/FormattedAmount";

const Amount = ({children}) => {
    return <span className={styles.amount}>
        {/*<FormattedAmount>{children}</FormattedAmount>*/}
        {formatAmount(children)}
    </span>
}

export default Amount;
