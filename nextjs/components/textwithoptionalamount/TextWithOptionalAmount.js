import formatAmount from "../../utils/amountformatter";

const TextWithOptionalAmount = ({text, amount}) => {
    if (amount) {
        return `${text} ${formatAmount(amount)}`
    }

    return text
}

export default TextWithOptionalAmount;
