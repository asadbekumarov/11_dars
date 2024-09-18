// 1-masala
// let nums = [2, 7, 11, 15];
// let target = 9;
// function findIndices(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let a = i + 1; a < nums.length; a++) {
//       if (nums[i] + nums[a] === target) {
//         return [i, a];
//       }
//     }
//   }
// }
// console.log(findIndices(nums, target));

// ---------------------------------------------------------

// 2-masala

// function removeDuplicates(arr) {
//   return arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }

// let arr = [1, 3, 2, 2, 3];
// let result = removeDuplicates(arr);
// console.log(result);

// 3-masala

// function getLevel(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }

// console.log(getLevel(4));

// 4-masala

// const sumDigitsArray = (...numbers) => {
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   return sum.toString().split("").map(Number);
// };
// let result = sumDigitsArray(1, 22, 3);
// console.log(result);

// 5-masala

// const obj = { a: 1, b: 22 };
// const sumOfValues = Object.values(obj).reduce((acc, value) => acc + value, 0);
// const sumOfDigits = (num) => {
//     return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
// };
// const result = sumOfDigits(sumOfValues);
// console.log(`Value'lar yig'indisi: ${sumOfValues} raqamlar yig'indisi: ${result}`);

// 6-masala

// const countVowels = (word) => {
//   const vowels = "aeioufghjkljhgfdcfvbnmkiuytrewrtyui";
//   let count = 0;
//   word
//     .trim().split("").forEach((char) => {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     });

//   return count;
// };
// console.log(countVowels("   world   "));

// 7-masala

// const getInitialOdds = (n) => {
//     let odds = [];
//     for (let i = 0; i < n; i++) {
//         odds.push(2 * i + 1);
//     }
//     return odds;
// };
// console.log(getInitialOdds(3));

// 8-masala

// function countVowels(word) {
//   let trimmedWord = word.trim();
//   let unli = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < trimmedWord.length; i++) {
//     if (unli.includes(trimmedWord[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("  hello world salom word "));

// 9-masala

// let list1 = [1, 2, 4];
// let list2 = [1, 3, 4];
// var mergeTwoLists = function (list1, list2) {
//   if (list1.length === 0) return list2;
//   if (list2.length === 0) return list1;

//   if (list1[0] < list2[0]) {
//     return [list1[0], ...mergeTwoLists(list1.slice(1), list2)];
//   } else {
//     return [list2[0], ...mergeTwoLists(list1, list2.slice(1))];
//   }
// };

// console.log(mergeTwoLists(list1, list2));

// 10-masala

// let Array = [1, 2, 3, 4, 5, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 6, 7, 2, 8];
// function repeated(arr) {
//   let equal = [];
//   let itemCount = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (itemCount[arr[i]]) {
//       itemCount[arr[i]] += 1;
//     } else {
//       itemCount[arr[i]] = 1;
//     }
//   }
//   for (let item in itemCount) {
//     if (itemCount[item] > 1) {
//       equal.push(item);
//     }
//   }
//   return equal;
// }
// console.log(repeated(Array));
