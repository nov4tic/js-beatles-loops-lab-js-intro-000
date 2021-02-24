function theBeatlesPlay(mus, inst) {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(mus[i].concat(' plays ', inst[i]));
  }
  return arr;
}

function johnLennonFacts(arr) {
  let i = 0;
  let empty = []
  while (i < arr.length) {
    empty.push(arr[i] + '!!!')
    i++
  }
  return empty;
}
