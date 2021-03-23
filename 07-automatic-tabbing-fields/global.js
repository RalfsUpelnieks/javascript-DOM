// Your JavaScript goes here.
window.addEventListener("load", function(){

    const INPUT_1 = document.getElementById('first')
    const INPUT_2 = document.getElementById('second')
    const INPUT_3 = document.getElementById('third')

    INPUT_1.addEventListener('input', function(e){
        if(INPUT_1.value.length == INPUT_1.maxLength){
            INPUT_2.focus()
        }
    });
    INPUT_2.addEventListener('input', function(e){
        if(INPUT_2.value.length == INPUT_2.maxLength){
            INPUT_3.focus()
        }
    });
    
})