function theBeatlesPlay(mus, inst) {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(mus[i].concat(' plays ', inst[i]));
  }
  return arr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let newArr = []
  for (let i = 0; i < 4; i++) {
    newArr.push( facts[i] + '!!!');
  }
  return newArr;
}
