import {
  faChartBar,
  faPercentage,
  faSackDollar,
  faStar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const DUMMY_MARKET_DATA: SupportedCurrency[] = [
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
  {
    color: "",
    currencyGroup: "",
    currencySymbol: "",
    decimal_point: 0,
    listingDate: "",
    logo: "",
    name: "",
  },
];

export const FILTER_DATA: {
  icon: IconDefinition;
  type: FilterName;
  title: string;
}[] = [
  { icon: faStar, type: "new", title: "New" },
  { icon: faChartBar, type: "name", title: "Name" },
  { icon: faPercentage, type: "gain", title: "Gainers" },
  { icon: faSackDollar, type: "price", title: "Price" },
];
