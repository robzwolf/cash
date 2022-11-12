import { useRouter } from 'next/router'
import HomePage from "../components/homepage/HomePage";

const AmountPage = () => {
    const router = useRouter()
    const { amount } = router.query

    return <HomePage amount={amount} />
}

export default AmountPage;
