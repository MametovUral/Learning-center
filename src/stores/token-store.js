import { create } from "zustand";
import { setItem } from "../helpers/persistance-store";

const useTokenStore = create((set) => ({
  isLoading: false,

  signUserStart: () => set({ isLoading: true }),
  signUserSuccess: (token) => {
    set({ isLoading: false });
    setItem("token", token.token);
  },
  signUserFailure: (error) =>
    set({
      isLoading: false,
      error,
    }),
}));

export default useTokenStore;
