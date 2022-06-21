import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account } from "../pages/main-page/AccountsGrid/types";

const BASE_URL = "http://localhost:3001/";

export const accounts = createApi({
  reducerPath: "accounts",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAccounts: builder.query<Account[], void>({
      query: () => "accounts",
    }),
  }),
});

export const { useGetAccountsQuery } = accounts;
