export const Config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
};

export const ApiUrl = {
  supportedCurrencies: "wallet/supportedCurrencies",
  priceChanges: "trade/price-changes",
};

export const ActionTypes = {
  RESET_FILTER: "RESET_FILTER",
  SET_MARKET: "SET_MARKET",
  SET_FILTER: "SET_FILTER",
};
