import styles from "./debitcard.module.css";
import TextWithOptionalAmount from "../../textwithoptionalamount/TextWithOptionalAmount";

const DebitCard = ({ amount, buttonClassName }) => {
  return (
    <a
      href={TextWithOptionalAmount({
        text: "https://settleup.starlingbank.com/robertjakobwhitworth?amount=",
        amount,
        prefix: "",
      })}
      className={["btn", styles.debitcard, buttonClassName, "btn-primary"].join(
        " "
      )}
    >
      Pay by Debit Card
    </a>
  );
};

export default DebitCard;
