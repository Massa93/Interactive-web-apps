const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
    
	name: '${leoName} ${leoSurname}',
	balance: leoBalance,
	access_id: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address:  {
		number: leoNumber, 
		street: leoStreet,
		postal_code: leoPostal,
	}
}

const sarah = {
    
	name: '${sarahName} ${sarahSurname}',
	age: 62,
	access_id: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postal_code: sarahPostal,
    }

    }
/*console.log(leo, leo[address][postal_code])
console.log(sarah, sarah[address][postal_code])*/

console.log(leo, leo.address.postal_code);
console.log(sarah, sarah.address.postal_code);

/*const result = ` \n ${leoName} ${leoSurname}  (Owed: R  ${Math.abs(leoBalance).toFixed(2)}) \n ${sarahName} ${sarahSurname}  (Owed: R  ${Math.abs(sarahBalance).toFixed(2)}) \n \n ------------------------------------------ \n    Total amount (Owed:  R ${(Math.abs(leoBalance)+Math.abs(sarahBalance)).toFixed(2)} ) \n ------------------------------------------`

console.log(result)

 Leo Musvaire  (Owed: R  9394.00) 
 Sarah Kleinhans  (Owed: R  4582.20) 
 
 ------------------------------------------ 
    Total amount (Owed:  R 13976.20 ) 
 ------------------------------------------*/