import formatAmount from "../../utils/amountformatter";

const TextWithOptionalAmount = ({ text, amount }) => {
  if (amount) {
    return `Send ${formatAmount(amount, "£")} to Robbie`;
  } else {
    return 'Send money to Robbie'
  }
};

export default TextWithOptionalAmount;
