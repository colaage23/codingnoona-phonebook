import { create } from "zustand";

const usePhonebookStore = create((set) => ({
  phonebook: [],
  addContact: (name, phone) =>
    set((state) => ({
      phonebook: [...state.phonebook, { name, phone }],
    })),
}));

export default usePhonebookStore;
