/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let vowels = ['a','e','i','o','u']
  for(let i=0; i<str.length; i++){
    for (let idx=0; idx<vowels.length; idx++){
      if (str[i].toLowerCase() == vowels[idx]){
        count += 1;
      }
    }
  }
  return count;
}

module.exports = countVowels;