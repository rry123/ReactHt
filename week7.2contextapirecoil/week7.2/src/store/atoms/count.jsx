import { atom } from "recoil";

export const countAtom = atom({
    key : "countAtom",          // Unique way to identify the atom
    default  : 0
})