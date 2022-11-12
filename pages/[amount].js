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

// Force server-side rendering to ensure we include the right
// social titles in the meta tags (disallow client-side rendering)
export async function getServerSideProps() {
    return { props: {} }
}
