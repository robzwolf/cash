import styles from "./subtitle.module.css";

const Subtitle = ({ children }) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

export default Subtitle;
