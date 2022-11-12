import styles from './applepay.module.css'
import TextWithOptionalAmount from "../../textwithoptionalamount/TextWithOptionalAmount";
import Image from "next/Image";
import applePayLogo from '../../../assets/img/apple-pay.png'

const ApplePay = ({amount, buttonClassName}) => {
    if (typeof window !== 'undefined' && !window.ApplePaySession) {
        return null
    }
    return (
        <a
            href={TextWithOptionalAmount({
                text: "https://settleup.starlingbank.com/robertjakobwhitworth?amount=",
                amount,
                prefix: ""
            })}
            className={['btn', styles.applepay, buttonClassName].join(' ')}
        >
            <Image src={applePayLogo} alt={"Apple Pay"} width={212} />
        </a>
    )
}

export default ApplePay;
