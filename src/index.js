module.exports = function reverse (n) {
  return n>=0 ? Number(n.toString().split('').reverse().join('')):Number(n.toString().slice(1).split('').reverse().join(''));
}
