import styles from './paypal.module.css'
import TextWithOptionalAmount from "../../textwithoptionalamount/TextWithOptionalAmount";
import Image from 'next/Image'
import paypalLogo from '../../../assets/img/paypal-logo.png'

const PayPal = ({amount, buttonClassName}) => {
    return (
        <a
            href={TextWithOptionalAmount({
                text: "https://paypal.me/rjakobwhitworth/",
                amount,
                prefix: ""
            })}
            className={['btn', styles.paypal, buttonClassName].join(' ')}
        >
            <Image src={paypalLogo} alt="PayPal" height={30} />
        </a>
    )
}

export default PayPal;
