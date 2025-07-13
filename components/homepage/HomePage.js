import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import Amount from "../amount/Amount";
import styles from "./homepage.module.css";
import Head from "next/head";
import TextWithOptionalAmount from "../textwithoptionalamount/TextWithOptionalAmount";
import PaymentButtons from "../paymentbuttons/PaymentButtons";
import ProfilePicture from "../profilepicture/ProfilePicture";

const HomePage = ({ amount }) => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={TextWithOptionalAmount({ amount })}
        />
        <meta
          property="og:description"
          content="Send money to Robbie Jakob-Whitworth using Apple Pay, PayPal or a UK debit card."
        />
        <meta property="og:url" content="https://robbie.cash/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:site_name"
          content={TextWithOptionalAmount({ amount })}
        />
        <title>{TextWithOptionalAmount({ amount })}</title>
      </Head>
      <main className={styles.main}>
        <ProfilePicture />
        <Title>Choose a payment method</Title>
        <Subtitle amount={amount}>
          {amount ? (
            <>
              to send <Amount>{amount}</Amount> to Robbie:{` `}
            </>
          ) : (
            "to send money to Robbie"
          )}
        </Subtitle>
        <PaymentButtons amount={amount} />
      </main>
    </>
  );
};

export default HomePage;
