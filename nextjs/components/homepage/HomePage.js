import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import Amount from "../amount/Amount";
import styles from './homepage.module.css';
import Head from "next/head";
import formatAmount from "../../utils/amountformatter";

const HomePage = ({amount}) => {
    return (<>
        <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                  crossOrigin="anonymous" />
            <title>
                {amount ?
                    `Pay Robbie ${formatAmount(amount)}`
                    : 'Pay Robbie'
                }
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
