import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { accounts } from "../services/accounts";

export const store = configureStore({
  reducer: {
    [accounts.reducerPath]: accounts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accounts.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
