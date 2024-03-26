import { atom } from "recoil";

const countAtom = atom({
    key : "countAtom",          // Unique way to identify the atom
    default  : 0
})