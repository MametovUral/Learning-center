import { create } from "zustand";

const useGroupStore = create((set) => ({
  isloading: false,
  error: null,
  groups: null,

  groupStart: () => set({ isloading: true }),
  groupSuccsess: (groups) => set({ isloading: false, groups }),
  groupFailure: (error) => set({ isloading: false, error }),
}));

export default useGroupStore;
