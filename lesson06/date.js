const date = new Date();

console.log(date)
console.log(date.getSeconds())
console.log(date.getUTCSeconds())

console.log(date.getHours())
console.log(date.getUTCHours())

const startDate = new Date(Date.UTC(2000, 0, 1));

console.log(startDate)

const now = Date.now()
console.log(now)
console.log(Date.parse(startDate))
console.log(Date.parse(new Date()))