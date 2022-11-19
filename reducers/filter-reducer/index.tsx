import { ActionTypes } from "config/constants";

export const initialFilterState: { data: Partial<FilterType> } = {
  data: {},
};

export const filterReducer = (
  state: any,
  action: { data: FilterType; type: string }
) => {
  switch (action.type) {
    case ActionTypes.RESET_FILTER:
      return { data: {} };
    case ActionTypes.SET_FILTER:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
