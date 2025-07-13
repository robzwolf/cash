const formatAmount = (amount, prefix) => {
  if (prefix === undefined) {
    prefix = "£";
  }
  if (Math.round(amount) === amount) {
    return `${prefix}${amount}`
  } else {
    return `${prefix}${amount.toFixed(2)}`;
  }
};

export default formatAmount;
