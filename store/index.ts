import { create } from "zustand";

interface MacbookState {
    color: string;
    scale: number;
    setColor: (color: string) => void;
    setScale: (scale: number) => void;
    reset: () => void;
}

const useMacBookStore = create<MacbookState>((set) => ({
    color: "#2e2c2e",
    scale: 0.08,
    setColor: (color: string) => set({ color }),
    setScale: (scale: number) => set({ scale }),
    reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacBookStore;