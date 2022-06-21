import { ButtonStyles, Button } from "../../components/Button";

import styles from "./MainPage.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Accounts</h1>
      <div className={styles.buttonsWrapper}>
        <Button label="New Account" />
        <Button label="New Transaction" buttonStyle={ButtonStyles.DarkBlue} />
      </div>
    </div>
  );
};
