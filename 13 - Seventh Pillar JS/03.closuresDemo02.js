function process() {
  let i = 0;
  let j = [1, 2, 3];
  let k = 10; // it doesn't remember k in Scopes as its not used
  function innerProcess() {
    i += 1;
    console.log(j);
    return i;
  }
  return innerProcess;
}

x = process();
