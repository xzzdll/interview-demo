// 解析
// 1.reduce的用法 求数组相加后的总和  https://www.runoob.com/jsref/jsref-reduce.html
const arr = [1,2,3,4];
const sumArr = arr.reduce((total, current, currentIndex, targetArr) => total + current, 0);
console.log(sumArr);

// reduce功能 将多个数据变成一个数据
const keys = ['name', 'age'];
const values = ['joy', 18]; // => {name: 'joy', age: 18}
const obj = keys.reduce((total, current, currentIndex) => (total[current] = values[currentIndex], total), {});
console.log('obj', obj);

// 2.compose方法
function sum (a, b){
  return a+b;
}
function toUpper (str){
  return str.toUpperCase();
}
function add (str){
  return "***"+ str +"***";
}
// console.log(add(toUpper(sum('joy','jia'))));

// 此时，需要优化，产生componse方法，用recureRight, 组合函数并传参 目标：compose(add, toUpper, sum)('joy', 'jia');
 function composeRight (...fns){
  return (...args) => {
    const lastFn = fns.pop(); //取最后一个函数
    return fns.reduceRight((total, current) => {
      return current(total);
    }, lastFn(...args))
  }
}
console.log('composeRight', composeRight(add, toUpper, sum)('joy', 'jia'));

//用recure写
function compose (...fns){
  return fns.reduce((total, current) => {
    return (...args) => {
      return total(current(...args));
    }
  })
}
// 简化
const compose = (...fns) =>  fns.reduce((total, current) =>  (...args) =>  total(current(...args)))
console.log('compose', compose(add, toUpper, sum)('joy', 'jia'));