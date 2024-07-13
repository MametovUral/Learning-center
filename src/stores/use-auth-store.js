import { create } from "zustand";

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
  },
  siginUserFailure: (error) =>
    set({
      isLoading: false,
      error,
    }),
}));
export default useAuthStore;
