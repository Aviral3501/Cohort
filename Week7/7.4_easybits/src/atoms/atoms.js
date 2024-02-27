import {atom, selector} from "recoil";

export const networkAtom = atom({
    key:"newtworkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default:12
})

export const messagingAtom = atom({
    key: 'messagingAtom', 
    default:5
})

export const totalNotificationsSelector = selector({
    key:'totalNotificationSelector',
    get: ({get}) =>{
        const networkAtomCount =get(networkAtom);
        const messaginAtomCount =get(messagingAtom);
        const notificationsAtomCount =get(notificationsAtom);
        const jobsAtomCount =get(jobsAtom);
        return networkAtomCount+messaginAtomCount+notificationsAtomCount+jobsAtomCount;
    }
})