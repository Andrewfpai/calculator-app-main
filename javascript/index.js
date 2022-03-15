let button = document.querySelectorAll(".btn")
let display = document.getElementById("display")
let result = ""
let value

// button.forEach((button) => {
//     button.addEventListener("click", () => {
//         result = result + button.value
//         display.textContent = result
//     })
// })

function combine(x){
    value = x
        if (value == 0 && result.length == 0){
            display.textContent = "0"
        } else {
            if (display.textContent == 0){
                result = ""
                result = result + value
                display.textContent = result
                display.textContent = value
            } else {

            result = result + value
            display.textContent = result
            }
        }
}

function calc(){
    result = Function("return " + result)()
    console.log(result)
    return result
}


function reset(){
    result = "0"
    display.textContent = result
}

function deleteDislay(){
    if (display.textContent == 0){
        display.textContent = "0"
    } if (display.textContent == "Infinity"){
        result = "0"
        display.textContent = result
    }
    else {
        result = result.toString().slice(0,-1)
        display.textContent = result

        if(result.length == 0){
            display.textContent = "0"
        }
    }
}

function equals(){
    calc()
    display.textContent = result
}

