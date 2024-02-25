function* fetchNextElement() {
  const x = 10;
  yield 11;
  console.log("Entering after a yield");
  const y = x + (yield 30);
  console.log("Value of y is", y);
}

const iter = fetchNextElement();
console.log("first", iter.next());
console.log("second", iter.next(8));
