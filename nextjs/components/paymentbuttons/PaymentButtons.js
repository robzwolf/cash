import styles from './paymentbuttons.module.css'
import PayPal from "../buttons/paypal/PayPal";

const PaymentButtons = ({amount}) => {
    return (
        <section className={styles.buttons}>
            <PayPal amount={amount} btnClassName={styles.btn} />
        </section>
    )
}

export default PaymentButtons;
