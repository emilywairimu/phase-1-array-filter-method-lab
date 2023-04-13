// Code your solution here
const drivers = ['Carol', 'Mark', 'Alice', 'George', 'Patrick']

const findMatching = (c,m) => c.filter(c => c.toLowerCase() === m.toLowerCase())

const fuzzyMatch = (c,m) => c.filter(c => c.charAt(0) === m.charAt(0))

const matchName = (c,m) => c.filter(c => c.name === m)