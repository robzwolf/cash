import {useEffect, useState} from "react";
import styles from './applepay.module.css'
import TextWithOptionalAmount from "../../textwithoptionalamount/TextWithOptionalAmount";
import Image from "next/image";
import applePayLogo from '../../../assets/img/apple-pay.png'

const ApplePay = ({amount, buttonClassName}) => {
    const [hasApplePay, setHasApplePay] = useState(false);
    useEffect(() => {
        setHasApplePay(!(typeof window !== 'undefined' && !window.ApplePaySession))
    })
    return (
        <a
            href={TextWithOptionalAmount({
                text: "https://settleup.starlingbank.com/robertjakobwhitworth?amount=",
                amount,
                prefix: ""
            })}
            className={[
                'btn',
                styles.applepay,
                buttonClassName,
                hasApplePay ? '' : styles.hidden
            ].join(' ')}
        >
            <Image src={applePayLogo} alt={"Apple Pay"} width={212} placeholder="blur" />
        </a>
    )
}

export default ApplePay;
