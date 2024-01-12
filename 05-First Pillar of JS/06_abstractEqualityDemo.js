console.log(null == undefined); // true
console.log(12 == "12"); // true
console.log(false == "0"); // true
/**
 *  x -> boolean -> toNumber -> false -> 0
 *  x = 0, y = 0, x == y
 *  y -> toNumber -> 0
 *  0 == 0 -> true
 */

console.log(null == false); // false (last condition)

let obj = {
  x: 10,
  valueOf() {
    return 100;
  },
};

console.log(99 == obj); // false
console.log(100 == obj); // true
