import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import ItemFilter from "components/ItemFilter";
import { FILTER_DATA } from "data";
import React from "react";

type Props = {
  className: string;
  onChange: (val: string) => void;
};

const FilterList: React.FC<Props> = ({ className, onChange }) => {
  return (
    <div
      className={clsx(
        className,
        "flex  justify-between  md:items-center flex-col-reverse md:flex-row  pb-2"
      )}
    >
      <div className="flex overflow-x-scroll lg:overflow-hidden">
        {FILTER_DATA.map((v, k) => (
          <span key={k} className="mr-4">
            <ItemFilter item={v} />
          </span>
        ))}
      </div>
      <div className="flex w-full md:w-auto relative ">
        <FontAwesomeIcon
          icon={faSearch}
          height={16}
          width={16}
          className="absolute top-2 left-3"
          color="lightgrey"
        />
        <input
          className="w-full md:w-auto mb-4 md:mb-0"
          onChange={(v) => onChange && onChange(v?.target.value)}
          placeholder="Cari crypto"
        />
      </div>
    </div>
  );
};

export default FilterList;
