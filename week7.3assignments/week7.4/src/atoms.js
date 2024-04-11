import { atom, selector } from "recoil";

import axios from "axios";
// export const networkAtom = atom({
//     key : "networkAtom",
//     default : 102
// })


// export const jobsAtom = atom({
//     key : "jobsAtom",
//     default : 0
// })

// export const notificationsAtom = atom({
//     key : "notificationsAtom",
//     default : 12
// })

// export const messagingAtom = atom({
//     key : "messagingAtom",
//     default : 0
// })

// making a single atom

export const notifications = atom({
    key : "notifications",
    default : selector({
        key : "networkAtomSelector",
        get : async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
})


// selector can be used to calculate the sum of all other atoms

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get})=>{
        const allNotifications = get(notifications);

        return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging
    }
})