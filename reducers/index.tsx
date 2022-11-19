import React, {useReducer, createContext} from 'react';
import {filterReducer, initialFilterState} from './filter-reducer';
import {initialMarketState, marketReducer} from './market-reducer';

type Props = {
  children: any;
};

export const Store = createContext<any>(null);

export const StoreProvider = (props: Props) => {
  const mainReducer = {
    filter: useReducer(filterReducer, initialFilterState),
    market: useReducer(marketReducer, initialMarketState),
  };
  return <Store.Provider value={mainReducer}>{props.children}</Store.Provider>;
};
