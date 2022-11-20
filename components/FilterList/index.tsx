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
        "flex overflow-scroll justify-between flex-col md:flex-row lg:overflow-hidden pb-2"
      )}
    >
      <div className="flex">
        {FILTER_DATA.map((v, k) => (
          <span key={k} className="mr-4">
            <ItemFilter item={v} />
          </span>
        ))}
      </div>
      <div className="flex relative">
        <FontAwesomeIcon
          icon={faSearch}
          height={16}
          width={16}
          className="absolute top-2 left-3"
          color="lightgrey"
        />
        <input
          onChange={(v) => onChange && onChange(v?.target.value)}
          placeholder="Cari crypto"
        />
      </div>
    </div>
  );
};

export default FilterList;
