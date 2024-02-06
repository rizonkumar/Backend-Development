function fetchNextElement(array) {
  let idx = 0;
  function next() {
    if (idx == array.length) {
      return undefined;
    }
    const nextElement = array[idx];
    idx++;
    return nextElement;
  }
  return next;
}

// somewhere we consume it

// inside automatic fetcher variable we can store next function
const automaticFetcher = fetchNextElement([99, 11, 12, 14, 0, 1, 2, 3]);
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher());
