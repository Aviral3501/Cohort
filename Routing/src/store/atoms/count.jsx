// creating an atom for count
import {atom, selector} from "recoil";
//define a atom
 export const  countAtom = atom({
    key:"countAtom",  //to uniquely define an atom
    default:0, //its default value
})

 export const  evenMessageSelector = selector({
    key: 'EvenMessageSelector',
    get: ({ get }) => {
      const count = get(countAtom);
      return count % 2 === 0 ? 'Count is even!' : null;
    },
  });