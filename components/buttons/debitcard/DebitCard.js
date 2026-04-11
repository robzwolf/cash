import styles from "./debitcard.module.css";

const DebitCard = ({ amount, buttonClassName }) => {
  return (
    <a
    href={`https://settleup.starlingbank.com/robert-jakobwhitworth-e2fd46?amount=${amount || ''}`}
      className={["btn", styles.debitcard, buttonClassName, "btn-primary"].join(
        " "
      )}
    >
      Pay by Debit Card
    </a>
  );
};

export default DebitCard;
