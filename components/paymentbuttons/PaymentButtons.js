import styles from "./paymentbuttons.module.css";
import ApplePay from "../buttons/applepay/ApplePay";
import PayPal from "../buttons/paypal/PayPal";
import DebitCard from "../buttons/debitcard/DebitCard";
import NatwestPayIt from "../buttons/natwestpayit/NatwestPayIt";

const PaymentButtons = ({ amount }) => {
  return (
    <section className={styles.buttons}>
      <NatwestPayIt amount={amount} buttonClassName={styles.button} />
      <ApplePay amount={amount} buttonClassName={styles.button} />
      <PayPal amount={amount} buttonClassName={styles.button} />
      <DebitCard amount={amount} buttonClassName={styles.button} />
    </section>
  );
};

export default PaymentButtons;
  