import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import Amount from "../amount/Amount";
import styles from './homepage.module.css';
import Head from "next/head";
import formatAmount from "../../utils/amountformatter";
import TextWithOptionalAmount from "../textwithoptionalamount/TextWithOptionalAmount";

const HomePage = ({amount}) => {
    return (<>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>
                {TextWithOptionalAmount({text:"Pay Robbie", amount})}
            </title>
        </Head>
        <main className={styles.main}>
            <Title>Choose a payment method</Title>
            <Subtitle amount={amount}>
                {amount ?
                    <>
                        to pay Robbie:{` `}
                        <Amount>{amount}</Amount>
                    </>
                    : 'to pay Robbie'
                }
            </Subtitle>
        </main>
    </>)
}

export default HomePage;
