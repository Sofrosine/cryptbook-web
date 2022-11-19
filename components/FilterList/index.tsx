import clsx from "clsx";
import ItemFilter from "components/ItemFilter";
import { FILTER_DATA } from "data";
import React from "react";

type Props = {
  className: string;
};

const FilterList: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "flex overflow-scroll lg:overflow-hidden pb-2")}>
      {FILTER_DATA.map((v, k) => (
        <span key={k} className="mr-4">
          <ItemFilter item={v} />
        </span>
      ))}
    </div>
  );
};

export default FilterList;
