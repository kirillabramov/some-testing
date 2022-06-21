import cx from "classnames";

import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ButtonStyles, buttonStylesMap } from "./constants";
import styles from "./Button.module.scss";

interface Props {
  label: string;
  buttonStyle?: ButtonStyles;
}

export const Button = ({ label, buttonStyle = ButtonStyles.Red }: Props) => {
  const buttonClass = buttonStylesMap[buttonStyle];

  return (
    <button className={cx(styles.button, buttonClass)}>
      <PlusIcon />
      {label}
    </button>
  );
};
