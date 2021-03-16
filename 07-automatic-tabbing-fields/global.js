// Your JavaScript goes here.
window.addEventListener("load", function(){

    const input1 = document.getElementById('first')
    const input2 = document.getElementById('second')
    const input3 = document.getElementById('third')

    input1.addEventListener('input', function(e){
        if(input1.value.length == input1.maxLength){
            input2.focus()
        }
    });
    input2.addEventListener('input', function(e){
        if(input2.value.length == input2.maxLength){
            input3.focus()
        }
    });
    
})