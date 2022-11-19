import { ActionTypes } from "config/constants";

export const setMarketAction = (data: SupportedCurrency[]) => {
  return {
    type: ActionTypes.SET_MARKET,
    data,
  };
};
