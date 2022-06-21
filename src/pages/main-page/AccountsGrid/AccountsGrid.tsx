import { useState } from "react";
import cx from "classnames";

import styles from "./AccountsGrid.module.scss";

import { AccountsItem } from "./AccountsItem";

import { ReactComponent as Mark } from "../../../assets/mark.svg";
import { useGetAccountsQuery } from "../../../services/accounts";

import { Account, AccountTypes } from "./types";

interface Props {
  data: Account[];
  title: string;
}

const ACCONT_LOADER_COUNTER = 8;

const AccountsGridView = ({ data, title }: Props) => {
  const initialData = data.slice(0, 4);
  const [slicedData, setSlicedData] = useState<Account[]>(initialData);

  const isSlicedLengthEqualToData = slicedData.length === data.length;

  const onSeeMoreClick = () => {
    if (isSlicedLengthEqualToData) {
      setSlicedData(initialData);
    } else {
      setSlicedData((prevData) =>
        prevData.concat(
          data.slice(prevData.length, prevData.length + ACCONT_LOADER_COUNTER)
        )
      );
    }
  };

  const buttonText = isSlicedLengthEqualToData ? "See less" : "See more";

  return (
    <div className={styles.accountsWrapper}>
      <div className={styles.accountsTitle}>{title}</div>

      <div className={styles.accountsGrid}>
        {slicedData.map((item) => (
          <AccountsItem key={item.id} {...item} />
        ))}
      </div>

      <div className={styles.btnWrapper}>
        <button
          className={cx(styles.seeMoreBtn, {
            [styles.collapsed]: isSlicedLengthEqualToData,
          })}
          onClick={onSeeMoreClick}
        >
          {buttonText} <Mark />
        </button>
      </div>
    </div>
  );
};

export const AccountsGrid = () => {
  const { data = [], isLoading } = useGetAccountsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const custodyData = data.filter(
    (item) => item.accountType === AccountTypes.Custody
  );

  const corporateData = data.filter(
    (item) => item.accountType === AccountTypes.Corporate
  );

  return (
    <>
      <AccountsGridView data={custodyData} title="Custody Vaults" />
      <AccountsGridView data={corporateData} title="Corporate Accounts" />
    </>
  );
};
