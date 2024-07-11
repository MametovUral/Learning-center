import { create } from "zustand";
import { setItem } from "../helpers/persistance-store";

const useAuthStore = create((set) => ({
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,

  signUserStart: () => set({ isLoading: true }),
  signUserSuccess: (user) => {
    set({
      isLoading: false,
      loggedIn: true,
      user,
    });
    setItem("token", user.token);
  },
  siginUserFailure: (error) =>
    set({
      isLoading: false,
      error,
    }),
}));
export default useAuthStore;
