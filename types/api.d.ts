type Wallet = {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: 2;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
};

type PriceChange = {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

type SupportedCurrency = {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets?: Wallet[];
  priceChange?: PriceChange;
};

type FilterName = 'new' | 'name' | 'gain' | 'price';

type FilterSort = 'asc' | 'desc';

type FilterType = {
  name: FilterName;
  sort?: FilterSort | null;
};
