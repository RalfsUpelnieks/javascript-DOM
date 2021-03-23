// Your JavaScript goes here.
window.addEventListener("load", function(){
    const TOGGLE_BUTTON = document.getElementById('toggle_button')
    var toggleMeClass = document.querySelectorAll(".second_five li");
    
    TOGGLE_BUTTON.addEventListener('click', function(e){
         
        if(toggleMeClass[0].style.display == 'none'){
            for (i = 0; i < toggleMeClass.length; i++) {
                toggleMeClass[i].style.display = "list-item";
            }
        }
        else{
            for (i = 0; i < toggleMeClass.length; i++) {
                toggleMeClass[i].style.display = "none";
                
            }
        }
            
        
        
    });
    
})