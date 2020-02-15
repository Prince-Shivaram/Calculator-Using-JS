const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value=number
}

const numbers=document.querySelectorAll(".number")
// const dot=querySelector(".dot")
// // numbers.forEach((number)=>{
// // 	number.addEventListener("click",(event)=>{
// // 		updateScreen(event.target.value)
// // 	})
// // })

// dot.addEventListener("click",(event)=>{
// 	currentInput=
// })

let prevInput='0'
let calculationOperator= ''
let currentInput='0'

// const inputNumber=(number)=>{
// 	currentInput=number
// }

// const inputNumber = (number) => {
// 	currentInput=(currentInput*10)+number

// }

const inputNumber = (number)=>{
	if(currentInput==='0'){
		currentInput=number
	} else {
		currentInput=currentInput+number
	}
}

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})




const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator =  operator
    updateScreen(operator)
    currentInput = '0'
}
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})



const equalSign = document.querySelector('.equal-sign')

// equalSign.addEventListener('click', () => {
//     console.log('equal button is pressed')
// })

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentInput)
})

const calculate = () => {
    let result = 0
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            break
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ''
}

// const equalSign = document.querySelector('.equal-sign')



const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentInput)
})