import { ActionTypes } from "config/constants";
import { DUMMY_MARKET_DATA } from "data";

export const initialMarketState: { data: SupportedCurrency[] } = {
  data: DUMMY_MARKET_DATA,
};

export const marketReducer = (
  state: any,
  action: { data: SupportedCurrency[]; type: string }
) => {
  switch (action.type) {
    case ActionTypes.SET_MARKET:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
