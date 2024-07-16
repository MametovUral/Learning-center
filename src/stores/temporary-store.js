import { create } from "zustand";

const useTemporaryStore = create((set) => ({
  temporary: null,
  temporarySuccess: (temporary) => set({ temporary }),
}));

export default useTemporaryStore;
