// cap = 10, on = 5, wait = 5 --> 0 //He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 // # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  if ((cap -= on)) {
    return wait;
  }
}

console.log();
