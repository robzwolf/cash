const formatAmount = (amount, prefix) => {
  if (prefix === undefined) {
    prefix = "£";
  }
  return `${prefix}${amount.toFixed(2)}`;
};

export default formatAmount;
