import { create } from "zustand/react";
import BaseBallGame from "../../domain/BaseBallGame";

type State<T> = {
  state: T;
};

type Actions<T> = {
  update: (state: T) => void;
};

type ZustandStateActions<T> = State<T> & Actions<T>;

const createZustandStore = <T,>(initialState: T) =>
  create<ZustandStateActions<T>>((set) => ({
    state: initialState,
    update: (state: T) => set(() => ({ state })),
  }));

export const useZustandBaseBall = createZustandStore(new BaseBallGame());
