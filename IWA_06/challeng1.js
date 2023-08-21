//1. the value primaryPhone has a "o" instead of 0
const primaryPhone = '0748105141'
//2. false because of the "o" which is not a numerical value or integer

const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof(parseInt(primaryPhone)) 
const secondaryValid = typeof(parseInt(secondaryPhone))

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )