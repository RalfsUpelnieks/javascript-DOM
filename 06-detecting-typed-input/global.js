// Your JavaScript goes here.
window.addEventListener("load", function(){

    const input = document.getElementById('full_name')

    input.addEventListener('input', function(e){
        document.getElementById('greeting').innerText = "Hello there, " + input.value + "!"
        
    });
    
})