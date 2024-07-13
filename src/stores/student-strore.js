import { create } from "zustand";

const useStudentStore = create((set) => ({
  isLoading: false,
  error: null,
  students: null,

  getUsersStart: () => set({ isLoading: true }),
  getUsersSuccess: (students) =>
    set({
      isLoading: false,
      students,
    }),
  getUsersFailure: (error) =>
    set({
      isLoading: false,
      error,
    }),
}));

export default useStudentStore;
