const linearSearch = function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i;
  }
  return undefined;
};

const binarySearch = function search(arr, x) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = low + high;
    if (arr[mid] == x) return x;
    else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return undefined;
};

module.exports = {
  linearSearch: linearSearch,
  binarySearch: binarySearch,
};
