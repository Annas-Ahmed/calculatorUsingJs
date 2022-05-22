input=document.getElementById("input")
function getValue(num){
    input.value+=num    
}

function calculate(){
    input.value=eval(input.value)
}
function allClear(){
    input.value=""
}
function Oclear(){
    input.value=input.value.slice(0,-1)
}