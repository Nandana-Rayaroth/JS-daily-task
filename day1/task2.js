
let InpStr = "CAT";

function PatternCreter(InpStr) {
  let sample = [];

  for (let i = 0; i < InpStr.length; i++) {
    sample.push(InpStr[i]);
    console.log(...sample);
  }
  let half = Math.floor(InpStr.length / 2);

  let halfStr = [];

  for (let j = half; j < sample.length; j++) {
    halfStr.push(sample[j]);
  }
  for (let j = half; j < sample.length - 1; j++) {
    console.log(...halfStr);
  }
  for (let k = sample.length - 1; k > half; k--) {
    console.log(sample[k]);
  }
}
PatternCreter(InpStr);