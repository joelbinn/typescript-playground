/**
 * Main entry point of the playground.
 */
import { Test } from './test'
import data from './data.json' // Example of how to load JSON data
import { add } from './js-example'

// Example code
const test = new Test()

test.hello()

console.log('data', data)

console.log('add javascript stuff', add(1, 2))
