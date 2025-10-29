// getNum();
// console.log(num);

// let num = 7;

// function getNum() {
//   console.log("learning js");
// }

// ********** test of js ***********
// find the number and then find its index

/*  const number = [1, 5, 3, 6, 7, 19, 2, 16, 19, 25, 255, 13, 79];

const abc = number.filter((number) => {
  if (number === 255) {
    return number;
  }
});

// console.log(abc);

const mnb = number.indexOf(255, number);
console.log(mnb); */

// **** test of js 2 ****
// even num and odd num should be in two diff array

/* const number = [1, 5, 3, 6, 7, 19, 2, 16, 19, 25, 255, 13, 79, 23, 0, 66, 91];
let arr = [];
let arr2 = [];
number.forEach((num) => {
  if (num % 2) {
    arr.push(num);
  } else {
    arr2.push(num);
  }
});

console.log(arr);
console.log(arr2);*/

// ******** Test no 2 **********
// find the smallest and largest num

/* const number = [1, 5, 3, 6, 7, 19, 2, 16, 19, 25, 255, 13, 79, 23, 0, 66, 91];

let smallest = number[0];
let largest = number[0];

for (let i = 0; i < number.length; i++) {
  if (number[i] < smallest) {
    smallest = number[i];
  } else if (number[i] > largest) {
    largest = number[i];
  }
}
console.log(smallest);
console.log(largest);*/

const number = [
  1, 5, 3, 6, 7, 19, 2, 16, 19, 25, 255, 13, 79, 23, 0, 66, 91, 6, 25, 196, 16,
];

let myArr = [];

number.forEach((num) => {
  for (let i = 0; i < number.length; i++) {
    if (num === number[i]) {
      let element = number[i];
      myArr.push(element);
    }
  }
});

console.log(myArr);

// number[0] === number[1]
// return number[0]
// number[0] === number[2]
// return number[0]
