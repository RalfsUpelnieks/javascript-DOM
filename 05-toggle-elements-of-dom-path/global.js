// Your JavaScript goes here.
window.addEventListener("load", function(){
    const toggleButton = document.getElementById('toggle_button')

    toggleButton.addEventListener('click', function(e){
        var toggleMeCass = document.querySelectorAll(".second_five li"); 
        if(toggleMeCass[0].style.display == 'none'){
            for (i = 0; i < toggleMeCass.length; i++) {
                toggleMeCass[i].style.display = "list-item";
            }
        }
        else{
            for (i = 0; i < toggleMeCass.length; i++) {
                toggleMeCass[i].style.display = "none";
                
            }
        }
            
        
        
    });
    
})