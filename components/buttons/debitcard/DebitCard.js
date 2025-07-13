import styles from "./debitcard.module.css";

const DebitCard = ({ amount, buttonClassName }) => {
  return (
    <a
    href={`https://settleup.starlingbank.com/robertjakobwhitworth?amount=${amount || ''}`}
      className={["btn", styles.debitcard, buttonClassName, "btn-primary"].join(
        " "
      )}
    >
      Pay by Debit Card
    </a>
  );
};

export default DebitCard;
