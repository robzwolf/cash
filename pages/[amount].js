import { useRouter } from 'next/router'
import HomePage from "../components/homepage/HomePage";

const AmountPage = () => {
    const router = useRouter()
    const { amount } = router.query

    let parsedAmount = parseFloat(amount)
    if (isNaN(parsedAmount)) {
        parsedAmount = null
    }

    return <HomePage amount={parsedAmount} />
}

export default AmountPage;
