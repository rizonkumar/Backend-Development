function fetchNextElement(array) {
  let idx = 0;
  function next() {
    if (idx == array.length) {
      return { value: undefined, done: true };
    }
    const nextElement = array[idx];
    idx++;
    return { value: nextElement, done: false };
  }
  return next;
}

// somewhere we consume it

// inside automatic fetcher variable we can store next function
const automaticFetcher = fetchNextElement([99, 11, 12, 14, 0, 1, 2, 3]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
