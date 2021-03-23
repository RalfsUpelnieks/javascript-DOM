// Your JavaScript goes here.
window.addEventListener("load", function(){

    const INPUT = document.getElementById('full_name');

    INPUT.addEventListener('input', function(){

        document.getElementById('greeting').innerText = "Hello there, " + INPUT.value + "!";
        
    });
    
})