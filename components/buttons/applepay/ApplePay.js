import {useEffect, useState} from "react";
import styles from './applepay.module.css'
import TextWithOptionalAmount from "../../textwithoptionalamount/TextWithOptionalAmount";
import InApp from "../../../utils/InApp";
import Swal from 'sweetalert2'
import Image from "next/image";
import applePayLogo from '../../../assets/img/apple-pay.png'

function applePayWarning() {
    Swal.fire({
        title: "You can't use Apple Pay",
        html: "<p>You can't use Apple Pay when you view this page in an in-app browser, Facebook Messenger. <strong>Open this page in Safari to use Apple Pay.</strong></p>",
        icon: "warning",
        confirmButtonText: "I don't want to use Apple Pay",
        footer: "<p><strong>Psst:</strong> Want to use Apple Pay? Open this page in Safari.</p>"
    })
}

const ApplePay = ({amount, buttonClassName}) => {
    const [hasApplePay, setHasApplePay] = useState("unavailable");

    useEffect(() => {
        const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);
        if (inapp.isInApp && inapp.iOS) {
        // if (true) {
            setHasApplePay("disabled")
            applePayWarning()
        } else if (window.ApplePaySession) {
            setHasApplePay("available")
        } else {
            setHasApplePay("unavailable")
        }
    })
    let applePayVisibleClassName;
    switch (hasApplePay) {
        case "available": {
            applePayVisibleClassName = null
            break
        }
        case "disabled": {
            applePayVisibleClassName = styles.disabled
            break
        }
        case "unavailable": {
            applePayVisibleClassName = styles.unavailable
            break
        }
        default: {
            applePayVisibleClassName = null
        }
    }

    const applePayClick = (e) => {
        if (hasApplePay === "disabled") {
            e.preventDefault()
            applePayWarning()
        } else {
            return true
        }
    }

    return (
        <>
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
                    applePayVisibleClassName
                ].join(' ')}
                onClick={(e) => applePayClick(e)}
            >
                <Image src={applePayLogo} alt={"Apple Pay"} width={212} placeholder="blur"/>
            </a>
        </>
    )
}

export default ApplePay;
