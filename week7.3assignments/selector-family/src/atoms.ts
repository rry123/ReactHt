import { atomFamily, selectorFamily } from "recoil";

import axios from "axios";

export const todosAtomFamily = atomFamily({
    key : 'todosAtomFamily',
    get : (id) => async ({get}) => {
        const res = await axios.get(`https://sum-sever.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
    },
})