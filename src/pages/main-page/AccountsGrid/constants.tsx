import { ReactComponent as BTC } from "../../../assets/BTC_icon.svg";
import { ReactComponent as ETH } from "../../../assets/ETH_icon.svg";
import { ReactComponent as EUR } from "../../../assets/EUR_icon.svg";
import { ReactComponent as GBP } from "../../../assets/GBP_icon.svg";
import { ReactComponent as USD } from "../../../assets/USD_icon.svg";

import { Currencies } from "./types";

export const currencyIconMap = {
  [Currencies.BTC]: BTC,
  [Currencies.ETH]: ETH,
  [Currencies.EUR]: EUR,
  [Currencies.GBP]: GBP,
  [Currencies.USD]: USD,
};
