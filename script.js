
// function square(arr) {
//     const result = arr.map(it => it * it)
//     return result
// }
// console.log(square([1, 2, 3, 0, 4, 5, 6]))


// const yellow = (array) => {
//   return array.map((el) => el > 0)
// }
// console.log(yellow([1, 2, 3, 0, 4, 5, 6]))


// const yellow = (array) => {
//     if (array < 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(yellow([1, 2, -3, 0, 4, -5, 6]))


// const yellow = (array) => {
//   return array.filter((el) => el < 0)
// }
// console.log(yellow([1, 2, -3, 0, 4, 5, -6]))


// const yellow = (array) => {
//   return array.filter((el) => el % 2 === 0)
// }
// console.log(yellow( [1, 2, -3, 0, 4, 5, -6]))


// const yellow = (array) => {
//   return array.filter((el) => el.length > 5)
// }
// console.log(yellow(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))


// function yellowF(array) {
//     return array.reduce(
//     (a, c) => {
//         if (c < 0) a[0] = a[0] + c;
//         return a;
//     },
//         [0])
// }
//
// console.log(yellowF([1, 2, -3, 0, -4, 5, -6]))


// const yellow = (num,array) => {
//   return [...num,...array]
// }
// console.log(yellow( [1,2,3,4],['a','b','c','d']))


// const yellowF = (num , str) => {
//   return [...num,...str.replace(' ', '')]
// }
// console.log(yellowF([2, 3, 4, 5],'hello world'))


// const yellowF = (num , str) => {
//   return [...num,...str.split('  ')]
// }
// console.log(yellowF([2, 3, 4, 5],'hello world'))


// const yellowF = (num , str) => {
//   return [...num,...str.replace(' ', ''),...num]
// }
// console.log(yellowF([2, 3, 4, 5],'hello world'))