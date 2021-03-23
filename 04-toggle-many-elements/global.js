// Your JavaScript goes here.
window.addEventListener("load", function(){
    const TOGGLE_BUTTON = document.getElementById('button')
    var toggleMeClass = document.getElementsByClassName('toggle_me')

    TOGGLE_BUTTON.addEventListener('click', function(e){

        if(toggleMeClass[0].style.display == 'none'){
            for (i = 0; i < toggleMeClass.length; i++) {
                toggleMeClass[i].style.display = "inline";
            }
        }
        else{
            for (i = 0; i < toggleMeClass.length; i++) {
                toggleMeClass[i].style.display = "none";
                
            }
        }
            
        
        
    });
    
})