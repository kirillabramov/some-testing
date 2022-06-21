import { useMemo } from "react";

import { Account } from "./types";
import { currencyIconMap } from "./constants";

import styles from "./AccountsGrid.module.scss";

export const AccountsItem = ({ balance, accountName, currency }: Account) => {
  const IconRenderer = useMemo(() => currencyIconMap[currency], [currency]);

  return (
    <div className={styles.accountsItem}>
      <div className={styles.accountsItemHeader}>
        <div className={styles.currency}>
          <IconRenderer />
        </div>
        <div className={styles.balance}>{balance}</div>
      </div>

      <div className={styles.itemFooter}>
        <div className={styles.circle} />
        <div className={styles.accountName}>{accountName}</div>
      </div>
    </div>
  );
};
