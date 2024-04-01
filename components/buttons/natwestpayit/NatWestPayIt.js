import styles from "./natwestpayit.module.css";
import TextWithOptionalAmount from "../../textwithoptionalamount/TextWithOptionalAmount";

const NatWestPayIt = ({ amount, buttonClassName }) => {
  return (
    <a
      href={TextWithOptionalAmount({
        text: "https://paymentrequest.natwestpayit.com/reusable-links/f7ed2bd1-e39a-41fd-ab7b-faaba81b81d2",
        amount,
        prefix: "",
      })}
      className={["btn", styles.natwestpayit, buttonClassName, "btn-primary"].join(
        " "
      )}
      noreferrer="true"
    >
      Pay by Bank Transfer
    </a>
  );
};

export default NatWestPayIt;
