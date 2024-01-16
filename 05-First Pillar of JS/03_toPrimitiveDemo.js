let obj = {};

console.log(10 - obj); // obj.valueOf -> object, toString -> [Object object] -> NaN

let obj1 = { x: 9, y: 10};

console.log(100 - obj1); // NaN

let obj2 = {x: 7, valueOf() {return 99}};
console.log(100 - obj2); // 1

let obj3 = {x: 8, toString() {return "88"}};
console.log(90 - obj3); // 90 - 88 = 2

let obj4 = {x: 7, toString() {return {}}};
console.log(100 - obj4); // Throw Type Error
