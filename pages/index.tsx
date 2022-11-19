import { setMarketAction } from "actions";
import FilterList from "components/FilterList";
import Table from "components/Table";
import { DUMMY_MARKET_DATA } from "data";
import useGetCurrency from "queries/currency/useGetCurrency";
import useGetPriceChange from "queries/price/useGetPriceChange";
import React, { useContext, useEffect } from "react";
import { Store } from "reducers";

const Home = () => {
  const { market, filter } = useContext(Store);
  const [marketData, setMarketData] = market;
  const [filterData, setFilterData] = filter;

  const {
    data: currencyData,
    isFetching: currencyFetching,
    refetch: refetchCurrency,
  } = useGetCurrency();
  const {
    data: priceChangeData,
    isFetching: priceChangeFetching,
    refetch: refetchPriceChange,
  } = useGetPriceChange();

  useEffect(() => {
    if (
      currencyData?.length > 0 &&
      priceChangeData?.length > 0 &&
      !filterData?.data?.name
    ) {
      combineCurrencyPrice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyData, priceChangeData]);

  useEffect(() => {
    if (currencyData?.length > 0 && priceChangeData?.length > 0) {
      handleFilterData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  const combineCurrencyPrice = (searchVal?: string) => {
    let arr = [];
    if (searchVal) {
      arr = currencyData
        ?.filter((val: SupportedCurrency) =>
          val?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())
        )
        .map((val: any) => {
          return {
            ...val,
            priceChange: priceChangeData?.filter(
              (priceChangeVal: any) =>
                priceChangeVal?.pair?.split("/")[0] ===
                val?.currencyGroup?.toLowerCase()
            )[0],
          };
        });
    } else {
      arr = currencyData?.map((val: any) => {
        return {
          ...val,
          priceChange: priceChangeData?.filter(
            (priceChangeVal: any) =>
              priceChangeVal?.pair?.split("/")[0] ===
              val?.currencyGroup?.toLowerCase()
          )[0],
        };
      });
    }

    setMarketData(setMarketAction(arr));
  };

  const handleFilterData = () => {
    if (filterData?.data?.name) {
      let arr = [...marketData?.data];
      if (filterData?.data?.name === "new") {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          return (
            new Date(
              filterData?.data?.sort === "desc"
                ? b?.listingDate
                : a?.listingDate
            ).getTime() -
            new Date(
              filterData?.data?.sort === "desc"
                ? a?.listingDate
                : b?.listingDate
            ).getTime()
          );
        });
      } else if (filterData?.data?.name === "name") {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          if (filterData?.data?.sort === "asc") {
            return a.name?.localeCompare(b.name);
          } else {
            return b.name?.localeCompare(a.name);
          }
        });
      } else if (filterData?.data?.name === "gain") {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          if (filterData?.data?.sort === "asc") {
            return Number(a?.priceChange?.day) - Number(b?.priceChange?.day);
          } else {
            return Number(b?.priceChange?.day) - Number(a?.priceChange?.day);
          }
        });
      } else if (filterData?.data?.name === "price") {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          if (filterData?.data?.sort === "asc") {
            return (
              Number(a?.priceChange?.latestPrice) -
              Number(b?.priceChange?.latestPrice)
            );
          } else {
            return (
              Number(b?.priceChange?.latestPrice) -
              Number(a?.priceChange?.latestPrice)
            );
          }
        });
      }
      setMarketData(setMarketAction(arr));
    } else {
      combineCurrencyPrice();
    }
  };

  return (
    <div className="flex flex-1 flex-col py-8 bg-white w-full">
      <span className="mb-4 heading-l px-6">
        Harga Crypto dalam Rupiah Hari Ini
      </span>
      <FilterList className="px-6 mb-2" />
      <Table
        loading={currencyFetching || priceChangeFetching}
        data={marketData?.data}
        className="px-6"
      />
    </div>
  );
};

export default Home;
