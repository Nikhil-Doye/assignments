/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check original lengths first - if different, can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  let res = new Array(26).fill(0);

  str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  if (str1.length != str2.length) {
    return false;
  }

  for (let c = 0; c < str1.length; c++) {
    res[str1[c].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  for (let c = 0; c < str2.length; c++) {
    res[str2[c].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
  }

  // After both loops
  for (let i = 0; i < 26; i++) {
    if (res[i] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
