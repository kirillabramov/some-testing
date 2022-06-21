import { Header } from "./Header";
import { AccountsGrid } from "./AccountsGrid";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <AccountsGrid />
    </div>
  );
};
