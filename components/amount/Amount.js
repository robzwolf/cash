import styles from "./amount.module.css";
import formatAmount from "../../utils/amountformatter";

const Amount = ({ children }) => {
  return <span className={styles.amount}>{formatAmount(children)}</span>;
};

export default Amount;
