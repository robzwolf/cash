import styles from "./paypal.module.css";
import Image from "next/image";
import paypalLogo from "../../../assets/img/paypal-logo.png";

const PayPal = ({ amount, buttonClassName }) => {
  return (
    <a
      href={`https://paypal.me/rjakobwhitworth/${amount || ''}`}
      className={["btn", styles.paypal, buttonClassName].join(" ")}
    >
      <Image src={paypalLogo} alt="PayPal" height={30} placeholder="blur" />
    </a>
  );
};

export default PayPal;
