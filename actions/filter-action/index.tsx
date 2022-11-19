import { ActionTypes } from "config/constants";

export const resetFilterAction = () => {
  return {
    type: ActionTypes.RESET_FILTER,
  };
};

export const setFilterAction = (data: FilterType) => {
  return {
    type: ActionTypes.SET_FILTER,
    data,
  };
};
