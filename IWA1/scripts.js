const MAX_NUMBER = 14
const MIN_NUMBER = -5


const number= document.querySelector('[da ta-key="number"]')
const subtract= document.querySelector('[data-key="subtract"]')
const add= document.querySelector('[data-key="add"]')

const substractHandler= () =>{
    const newValue = parseInt(number.value)-1
    number.value= newValue;  

    if( number.value.disabled===true){
        add.disabled=false           
        }
        else{
            subtract.disabled=false
        }
}
const addHandler= () =>{
    const newValue=parseInt(number.value)-1
    number.value=number.value+1;

    if(subtract.disabled===true){
    add.disabled = true
    }
    else{
        add.disabled=false
    }

}

subtract.addEventListener('click', substractHandler)
add.addEventListener('click', addHandler)

console.log('hello world')