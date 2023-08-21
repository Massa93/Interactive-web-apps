const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = '00';
const minuteOfDay = '00';

// Only change below this line

/*

	if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
		const taxAsDecimal = tax / '100'
		const startingAfterTax = salary * '1' - taxAsDecimal
		const balace = starting - transport - food - rent
	}
*/
//1. the 00 assigned to "hourOfDay" and "minuteOfDay" did not have the String quotes
//2. the "if" statement did not have brackets outside it's parameters
//3. the denominator under tax was previously a string which cannot divide a numerical value 
/*
	3. the '1' in the "startingAfterTax" variable was previously a String which we cannot 
	multiply a numerical "taxAsDecimal" value.
*/
if (hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00')) {
	const taxAsDecimal = tax / 100
    const startingAfterTax = salary * 1 - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3))