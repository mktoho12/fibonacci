'use strict'

const memo = new Map()
memo.set(0, 0)
memo.set(1, 1)
const fib = (n) => {
  if(!memo.has(n)) {
    memo.set(n, fib(n - 2) + fib(n - 1))
  }
  return memo.get(n)
}

const length = 40
for(let i = 0; i <= length; i++) {
  console.log(fib(i))
}
