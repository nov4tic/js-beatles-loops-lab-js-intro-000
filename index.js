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
]

function johnLennonFacts(facts) {
  i = 0;
  let empty = []
  while (i < facts.length) {
    empty.push(facts[i] + '!!!')
    i++
  }
  return empty;
}
