var output = document.getElementById('output-screen')
let outputScreen = document.getElementById('output-screen')

function display(num){
    outputScreen.value += num
}

function calculate() {
    try{
        outputScreen.value = eval(outputScreen.value);
        
    }

    catch(err)
    {
        alert("Invalid");

        const calculator = document.getElementById('calculator');
        calculator.style.animation = 'animation: float 2s ease-in-out infinite;'

        
        
    }
}


function delNum() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function Clear() {
    outputScreen.value = "";
    
 }

 function sin() {
     document.calculator.result.value=Math.sin(document.calculator.result.value)
 }

 