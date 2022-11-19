import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resetFilterAction, setFilterAction } from "actions/filter-action";
import clsx from "clsx";
import React, { useContext } from "react";
import { Store } from "reducers";

type Props = {
  item: {
    icon: IconDefinition;
    type: FilterName;
    title: string;
  };
};

const ItemFilter: React.FC<Props> = ({ item }) => {
  const { filter } = useContext(Store);
  const [filterData, setFilterData] = filter;

  const handleFilter = () => {
    if (filterData?.data?.sort === "asc") {
      setFilterData(resetFilterAction());
    } else {
      setFilterData(
        setFilterAction({
          name: item?.type,
          sort: !filterData?.data?.sort
            ? "desc"
            : filterData?.data?.sort === "desc"
            ? "asc"
            : null,
        })
      );
    }
  };
  return (
    <div
      onClick={handleFilter}
      className={clsx(
        filterData?.data?.name === item?.type ? "bg-blue-300" : "bg-white",
        "flex items-center justify-between border border-gray-300 py-1 px-4 rounded-full hover:cursor-pointer relative"
      )}
    >
      <span className="flex items-center">
        <FontAwesomeIcon icon={item?.icon} height={16} width={16} />
        <span className="ml-2 text-sm">{item?.title}</span>
      </span>
      <div className="flex flex-col ml-2 pr-2">
        <FontAwesomeIcon
          height={10}
          className="absolute bottom-2.5"
          width={10}
          icon={faChevronUp}
          color={
            filterData?.data?.name === item?.type
              ? filterData?.data?.sort === "asc"
                ? "black"
                : !filterData?.data?.sort
                ? "black"
                : "grey"
              : "black"
          }
        />
        <FontAwesomeIcon
          height={10}
          className="absolute top-2.5"
          width={10}
          icon={faChevronDown}
          color={
            filterData?.data?.name === item?.type
              ? filterData?.data?.sort === "desc"
                ? "black"
                : !filterData?.data?.sort
                ? "black"
                : "grey"
              : "black"
          }
        />
      </div>
    </div>
  );
};

export default ItemFilter;
