//dates && times

const now = new Date(); //calling function to create new object of this type

console.log(now)
console.log(typeof now)


// year, months, day times
console.log('getFullYear', now.getFullYear) //getting function (to pass or manipulate)
console.log('getFullYear', now.getFullYear()) //get result of function

//getMonth: 0 - 11 -> 0 - January, 11 - December
//getDate: date of the Month
//getDay: day of week -> 0 - Sunday, 6 - Saturday
//getHours
//getMinures
//getSeconds

//timestamps
console.log('timestamp', now.getTime()) //in ms since 01.01.1970

//date strings
console.log(now.toDateString()) //shorted now
console.log(now.toTimeString()) //time part
console.log(now.toLocaleString()) //local view of current date

//seven diffrent string patters for Date
//below - max supported Date
const max = new Date('September 13 275760 02:00:00') //passing string to Date create object with specific date
console.log(max.getTime())

const before = new Date('April 18 2020 20:19:00')
const diff = now.getTime() - before.getTime() //can covert to days, hours etc.

console.log(diff)

const mins = Math.round(diff / 1000 / 60) //round - round to closest integer
const hours = Math.round(mins/ 60)
const days = Math.round(hours / 24)

console.log(mins, hours, days)
console.log(`the blog was written ${days} days ago`)

//converting timestamps into date objects
const timestamp = 1587235228535;
console.log(new Date(timestamp))

