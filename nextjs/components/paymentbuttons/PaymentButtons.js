import styles from './paymentbuttons.module.css'
import PayPal from "../buttons/paypal/PayPal";
import ApplePay from "../buttons/applepay/ApplePay";

const PaymentButtons = ({amount}) => {
    return (
        <section className={styles.buttons}>
            <ApplePay amount={amount} buttonClassName={styles.button} />
            <PayPal amount={amount} btnClassName={styles.btn} />
        </section>
    )
}

export default PaymentButtons;
