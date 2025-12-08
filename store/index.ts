import { create } from "zustand";

interface MacbookState {
    color: string;
    scale: number;
    texture: string;
    setColor: (color: string) => void;
    setScale: (scale: number) => void;
    setTexture: (texture: string) => void;
    reset: () => void;
}

const useMacBookStore = create<MacbookState>((set) => ({
    color: "#2e2c2e",
    scale: 0.08,
    texture: "/videos/feature-1.mp4",
    setColor: (color: string) => set({ color }),
    setScale: (scale: number) => set({ scale }),
    setTexture: (texture: string) => set({ texture }),
    reset: () => set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacBookStore;