import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
// ...

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    cartState: cartReducer,
    userState: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
