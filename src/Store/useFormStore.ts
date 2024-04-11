import { create } from "zustand";

type Store = {
  formData: object;
  setFormData: (data: object) => void;
};

const useFormStore = create<Store>((set) => ({
  formData: { banner: null, aboutus: null, promotion: null },
  setFormData: (data: object) =>
    set((prev) => ({
      formData: { ...prev.formData, ...data },
    })),
}));

export default useFormStore;
