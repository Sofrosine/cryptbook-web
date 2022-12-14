import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Skeleton from "react-loading-skeleton";

type Props = {
  value?: string;
  loading?: boolean;
};

const ItemChange: React.FC<Props> = ({ value, loading }) => {
  return loading ? (
    <Skeleton containerTestId="item-change-loader" />
  ) : (
    <div className="flex items-center justify-center" data-testid="item-change">
      {Number(value) !== 0 && (
        <FontAwesomeIcon
          className={`${Number(value) < 0 ? "mb-2" : "mt-2"} mr-2`}
          icon={Number(value) < 0 ? faSortDown : faSortUp}
          color={Number(value) < 0 ? "red" : "lightGreen"}
        />
      )}
      <span
        className={`${
          Number(value) < 0
            ? "text-red-500"
            : Number(value) === 0
            ? ""
            : "text-green-400"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

ItemChange.defaultProps = {
  value: "0",
};

export default ItemChange;
