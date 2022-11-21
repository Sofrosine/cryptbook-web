import clsx from "clsx";
import ItemChange from "components/ItemChange";
import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { currencyConverter } from "utils";

type Props = {
  loading: boolean;
  data: any[];
  className?: string;
};

const Table: React.FC<Props> = ({ loading, data, className }) => {
  const [gainOption, setGainOption] = useState<GainOption | string>("day");

  return (
    <div
      className={clsx(className, "w-full min-h-screen flex flex-col")}
      data-testid="main-table"
    >
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
            <th className="text-right relative pr-4">
              <select
                data-testid="main-table-select"
                className="text-right"
                onChange={(v) => setGainOption(v?.target?.value)}
              >
                <option data-testid="main-table-option" value="day">
                  24 JAM
                </option>
                <option data-testid="main-table-option" value="week">
                  1 MINGGU
                </option>
                <option data-testid="main-table-option" value="month">
                  1 BULAN
                </option>
                <option data-testid="main-table-option" value="year">
                  1 TAHUN
                </option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((v: SupportedCurrency, k) => (
            <tr
              key={k}
              className="text-center hover:bg-sky-100 hover:cursor-pointer font-semibold"
            >
              <td>
                {loading ? (
                  <Skeleton />
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Image
                        src={
                          v?.logo ||
                          "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg"
                        }
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
                        <span className="text-start">{v?.name}</span>
                        <span className="text-stone-400 lg:hidden">
                          {v?.currencyGroup}
                        </span>
                      </div>
                    </span>
                    <span className="text-stone-400 hidden lg:flex">
                      {v?.currencyGroup}
                    </span>
                  </div>
                )}
              </td>
              <td className="table-cell md:hidden text-right">
                <span className="flex flex-col items-end">
                  <span className="">
                    {currencyConverter(
                      Number(v?.priceChange?.latestPrice || 0)
                    )}
                  </span>
                  <ItemChange
                    loading={loading}
                    value={
                      (gainOption === "day"
                        ? v?.priceChange?.day
                        : gainOption === "week"
                        ? v?.priceChange?.week
                        : gainOption === "month"
                        ? v?.priceChange?.month
                        : v?.priceChange?.year) || "0"
                    }
                  />
                </span>
              </td>
              <td className="hidden md:table-cell">
                {loading ? (
                  <Skeleton />
                ) : (
                  <span className="font-semibold">
                    {currencyConverter(
                      Number(v?.priceChange?.latestPrice || 0)
                    )}
                  </span>
                )}
              </td>
              <td className="hidden md:table-cell">
                <ItemChange loading={loading} value={v?.priceChange?.day} />
              </td>
              <td className="hidden md:table-cell">
                <ItemChange loading={loading} value={v?.priceChange?.week} />
              </td>
              <td className="hidden md:table-cell">
                <ItemChange loading={loading} value={v?.priceChange?.month} />
              </td>
              <td className="hidden md:table-cell">
                <ItemChange loading={loading} value={v?.priceChange?.year} />
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
