/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
let length = str1.length;
if (length !== str2.length) return false;
str1=str1.toLowerCase();
str2=str2.toLowerCase();
let j=0;

for(let i =0 ;i<length;i++){
  let char1=str1[i];
  if(str2.includes(char1)==true){
    continue;
  }else{
    return false;
  }
}
return true;
}

module.exports = isAnagram;
