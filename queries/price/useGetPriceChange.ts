import { ApiUrl } from "config/constants";
import { useQuery } from "react-query";
import APICall from "../../utils/axios";

export default function useGetPriceChange() {
  return useQuery(
    ["PRICE_CHANGE"],
    async ({ signal }) => {
      const response = await APICall.get(ApiUrl.priceChanges, { signal });

      return response?.data?.payload || [];
    },
    {
      refetchInterval: 2000,
    }
  );
}
