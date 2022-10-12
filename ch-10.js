//////////////// Challenge - 10

// CClock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let h = 4,
  m = 32,
  s = 8;

let totalSecond = h * 3600 + m * 60 + s;
let mili = totalSecond * 1000;

// console.log(mili);
