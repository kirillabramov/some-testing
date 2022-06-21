export enum AccountTypes {
  Corporate = "corporateAccounts",
  Custody = "custodyVaults",
}

export enum Currencies {
  BTC = "BTC",
  ETH = "ETH",
  EUR = "EUR",
  GBP = "GBP",
  USD = "USD",
}

export interface Account {
  id: number;
  currency: Currencies;
  balance: number;
  accountName: string;
  accountType: AccountTypes;
}
