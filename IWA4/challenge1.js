/*1.Why did the original code not work?
  2.What changes did you need to make to achieve the intended behaviour?
  3.Why did the change result in the intended behaviour?
  4.Are there any other ways in which it could have been solved?*/

const date: 2050

//1.status was previously declared as a constant variable,
//  and a semicolon was used intstead of an equal sign.
//2.we replace the declaration: const status : 'student' with, let status = 'student'
let status = 'student'

const count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day'
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let count = count + 4

	if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3

    //3.because we then changed the value of status to: status = "parent"
    status = "parent"
	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)

//4. not that I know of.