import styles from "./paymentbuttons.module.css";
import ApplePay from "../buttons/applepay/ApplePay";
import PayPal from "../buttons/paypal/PayPal";
import DebitCard from "../buttons/debitcard/DebitCard";

const PaymentButtons = ({ amount }) => {
  return (
    <section className={styles.buttons}>
      <ApplePay amount={amount} buttonClassName={styles.button} />
      <PayPal amount={amount} buttonClassName={styles.button} />
      <DebitCard amount={amount} buttonClassName={styles.button} />
    </section>
  );
};

export default PaymentButtons;
