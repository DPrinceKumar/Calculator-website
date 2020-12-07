const calculatorScreen= document.querySelectorAll(".calculatorscreen")
// console.log(1);s 
// console.log(numbers);
constupdatesScreen=(number)=>{
    calculatorScreen.value=number
}
const numbers= document.querySelectorAll('.number')
let prevInput='0'
let calculationOperator=''
let currentInput='0'

const inputNumber=(number) =>{
    if (currentInput===`0`) {
        currentInput=number
    }
    else{
        currentInput=currentInput+number
    }
}

number.forEach((number) => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

const operators =document.querySelectorAll(".operator")
const inputOperator=(operators){
    prevInput=currentInput
    calculationOperator=operator
    updateScreen(operator)
    currentInput='0'
}
operators.forEach((operator)=>{
    operator.addEventListener(" click ",(event)=>
    {
        inputOperator(event.target.value
    })
})
const equilsign=document.querySelectorAll('.equal-sign')
equilsign.addEventListener("click" ,()=>{
    calculate()
    updateScreen(currentInput)
})
const calculate=()=>{
    let result=0
    switch(calculationOperator){
        case '+':
            result=parseInt(prevInput)+parseInt(currentInput)
                break
        case '-':
            result=parseInt(prevInput)-parseInt(currentInput)
                break
        case '*':
            result=parseInt(prevInput)*parseInt(currentInput)
                break
        case '/':
            result=parseInt(prevInput)/parseInt(currentInput)
                break
        // case '%':
        //     result=parseInt(prevInput)%parseInt(currentInput)
        //         break
                return
    }
    currentInput=result.toString()
    calculationOperator=''
}
const clearBtn=document.querySelector('.all-clear')
clearBtn.addEventListener('click' ,()=>{
    console.log('AC button is passed ')
})
const clearAll=()=>{
    prevInput='0'
    calculationOperator=''
    currentInput='0'
}
clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentInput)
})

// numbers.forEach((number)=> {
//     number.addEventListener("click",(event)=>{
//         console.log(event.target.value);
//     })
// })
// const numbers= document.querySelectorAll('.calculator-screen')
// const updateScreen=(number)=>{
//     calculatorScreen.value=number
// }
// const numbers= document.querySelectorAll(".number")
// numbers.forEach((number)=> {
//     number.addEventListener("click",(event)=>{
//         console.log(event.target.value);
//     })
// })


// const inputNumber=(number)=>{
//     currentInput=number
// }
// number.forEach((number)=>{
//     number.addEventListener(('click'),(event)=>{
//        inputNumber(event.target.value)
//        updateScreen(currentInput)
//     })
// })
// const inputNumber = (number)=>{
//     currentInput += number
// }