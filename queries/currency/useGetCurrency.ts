import { ApiUrl } from "config/constants";
import { useQuery } from "react-query";
import APICall from "../../utils/axios";

export default function useGetCurrency() {
  return useQuery(["CURRENCY"], async ({ signal }) => {
    const response = await APICall.get(ApiUrl.supportedCurrencies, { signal });

    return response?.data?.payload || [];
  });
}
