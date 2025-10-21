import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListStats = selector({
  key: "todoListStats",
  get: ({ get }) => {
    const list = get(todoListState);
    const total = list.length;
    const completed = list.filter((item) => item.isComplete).length;
    return { total, completed };
  },
});
