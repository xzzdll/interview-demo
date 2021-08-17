// 3.手写reduce
Array.prototype.reduce = function (callback, prev){
  // this 就是 [1,2,3]
  for (let i = 0; i < this.length; i++) {
    if (!prev) {
      prev = callback(this[i], this[i + 1], i + 1, this);
      console.log(prev)
      i++;
    } else {
      prev = callback(prev, this[i], i, this);
      console.log(prev)
    }
  }
  return prev;
};
// const r = [1,2,3].reduce((total, current, index, currentArr) => total*current, 100);
// console.log('r', r);

const keys = ['name', 'age'];
const values = ['joy', 18]; // => {name: 'joy', age: 18}
const obj = keys.reduce((total, current, currentIndex) => {
  let tmp = (total[current] = values[currentIndex], total)
  return tmp
}, {});
console.log('obj', obj);