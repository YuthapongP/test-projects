import { create } from "zustand";

type CartType = {
  initialCart: object;
  setCart: (data: number) => void;
};

interface CartState {
  initialCart: {
    totalItems: number;
  };
}

const initialCartState: CartState = {
  initialCart: {
    totalItems: 0,
  },
};

const useCart = create<CartType>((set) => ({
  ...initialCartState,
  setCart: (item: number) =>
    set((state) => ({
      initialCart: { ...state.initialCart, totalItems: item },
    })),
  //   setCart: (item: number) => set({ initialCartItem: item }),
}));

export default useCart;
