FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

//the shipping variable wasn't declared
let shipping = 0

//the location variable wasn't declared and initialised to "RSA"
//and the currency variable wasn't declared and intialised
let location = RSA
let currency = any

if (location = RSA) 
{ 
    shipping === 400 && currency === 'R400' 
}

//the syntax of the conditional statements was incorrect
//the location variable wasn't updated to "NAM"
location = NAM
if (location = NAM){
shipping = 600
} 
else {
    shipping = 800
}

shoes = 300 * 1
//the operation assigned to the "toys" variable had a minus sign (-) instead of an equal sign
toys = 100 * 5
shirts = 150 * 'NONE_SELECTED'
//the operation assigned to the "batteries" variable did not have an equal sign to complete a good syntax
batteries = 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
//the currency variable wasn't explicitly updated to a value
currency = null

//the if condition had and && sign insted of an || sign, and also did not specify the currency magnitude
if (shoes + batteries + pens + shirts > 1000 || shoes + batteries + pens + shirts > $60) 
{
	if (location = NAM && customers < 2) {
			if (location = RSA)
            //"calc shipping" is irrelevant and therefore must be truncated
		    shipping = 0 
		}
	}
//incorrectly put curly braces, and therefore must be truncated
/*}*/

//the "if" statement wasn't enclosed with brackete 
if ((shipping = 0) && (customers !=== 1)) { 
    console.log(WARNING) 
}

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null

console.log("PRICE: R1270")