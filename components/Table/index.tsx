import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import ItemChange from "components/ItemChange";
import { hexToCSSFilter } from "hex-to-css-filter";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { currencyConverter } from "utils";

type Props = {
  loading: boolean;
  data: any[];
  className: string;
};

const Table: React.FC<Props> = ({ loading, data, className }) => {
  return (
    <div className={clsx(className, "w-full min-h-screen flex flex-col")}>
      <table className="w-full responsive">
        <thead className="hidden md:table-header-group">
          <tr className="py-4 px-4">
            <th>CRYPTO</th>
            <th>HARGA</th>
            <th>24 JAM</th>
            <th>1 MGG</th>
            <th>1 BLN</th>
            <th>1 THN</th>
          </tr>
        </thead>
        <thead className="table-header-group md:hidden">
          <tr>
            <th className="text-left pl-4">CRYPTO</th>
            <th className="text-right pr-4">HARGA</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((v: SupportedCurrency, k) => (
            <tr key={k} className="text-center ">
              <td>
                {loading ? (
                  <Skeleton />
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Image
                        src={v?.logo}
                        height={24}
                        width={24}
                        alt="icon"
                        // style={{
                        //   filter: `${
                        //     hexToCSSFilter(v?.color || "#fff").filter
                        //   }`,
                        // }}
                      />
                      <div className="flex flex-col items-start ml-2">
                        <span className="">{v?.name}</span>
                        <span className="text-stone-400 lg:hidden font-sans">
                          {v?.currencyGroup}
                        </span>
                      </div>
                    </span>
                    <span className="text-stone-400 hidden lg:flex font-sans">
                      {v?.currencyGroup}
                    </span>
                  </div>
                )}
              </td>
              <td className="text-right md:text-center">
                {loading ? (
                  <Skeleton />
                ) : (
                  currencyConverter(Number(v?.priceChange?.latestPrice || 0))
                )}
              </td>
              <td className="hidden md:table-cell">
                {loading ? (
                  <Skeleton />
                ) : (
                  <ItemChange value={v?.priceChange?.day || "0"} />
                )}
              </td>
              <td className="hidden md:table-cell">
                {loading ? (
                  <Skeleton />
                ) : (
                  <ItemChange value={v?.priceChange?.week || "0"} />
                )}
              </td>
              <td className="hidden md:table-cell">
                {loading ? (
                  <Skeleton />
                ) : (
                  <ItemChange value={v?.priceChange?.month || "0"} />
                )}
              </td>
              <td className="hidden md:table-cell">
                {loading ? (
                  <Skeleton />
                ) : (
                  <ItemChange value={v?.priceChange?.year || "0"} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  data: [1, 2, 4, 5],
};

export default Table;
