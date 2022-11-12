import formatAmount from "../../utils/amountformatter";

const TextWithOptionalAmount = ({text, amount, prefix}) => {
    if (prefix === undefined) {
        prefix = " £"
    }
    if (amount) {
        return `${text}${prefix}${formatAmount(amount, "")}`
    }

    return text
}

export default TextWithOptionalAmount;
