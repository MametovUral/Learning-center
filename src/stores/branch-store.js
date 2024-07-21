import { create } from "zustand";

const useBranchStore = create((set) => ({
  isloading: false,
  error: null,
  branchs: null,
  branch2: null,
  branch3: null,

  branchStart: () => set({ isloading: true }),
  branchSuccsess: (branchs) => set({ isloading: false, branchs }),
  branchFailure: (error) => set({ isloading: false, error }),
}));

export default useBranchStore;
