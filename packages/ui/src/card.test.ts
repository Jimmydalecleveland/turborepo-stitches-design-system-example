import { expect, test } from 'vitest'

// sum.js
export function sum(a: number, b: number) {
  return a + b
}

// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
