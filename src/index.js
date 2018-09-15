module.exports = function getZerosCount(number) {
  var s = number;
  var res = 0;
  while (s>1) {
    s = Math.floor(s/5);
    res+=s;
  }
  return res;
}