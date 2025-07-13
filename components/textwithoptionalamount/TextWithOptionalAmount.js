import formatAmount from "../../utils/amountformatter";

const TextWithOptionalAmount = ({ text, amount, prefix }) => {
  if (amount) {
    return `Send ${prefix}${formatAmount(amount, "")} to Robbie`;
  } else {
    return 'Send money to Robbie'
  }
};

export default TextWithOptionalAmount;
