import styles from "./Button.module.scss";

export enum ButtonStyles {
  Red = "red",
  DarkBlue = "dark-blue",
}

export const buttonStylesMap: Record<ButtonStyles, string> = {
  [ButtonStyles.Red]: styles.buttonRed,
  [ButtonStyles.DarkBlue]: styles.buttonDark,
};
