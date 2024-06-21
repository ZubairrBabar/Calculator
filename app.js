var input_1 = document.getElementById("input-1")
var input_2 = document.getElementById("input-2")
var result = document.getElementById("result")
var display = document.getElementById("display")


function calculate(sign="+"){
    input1 = input_1.value
    input2 = input_2.value
    display.innerText = sign

    if (sign == "+") result.innerText = parseInt(input1)+parseInt(input2)
    if (sign == "-") result.innerText = input1 - input2
    if (sign == "*") result.innerText = input1 * input2
    if (sign == "/") result.innerText = input1 / input2
}

