// Your JavaScript goes here.
window.addEventListener("load", function(){
    const TOGGLE_BUTTON = document.getElementById('toggle_button');
    var toggleMeClass = document.querySelectorAll(".second_five li");
    
    TOGGLE_BUTTON.addEventListener('click', function(){
         
        for (i = 0; i < toggleMeClass.length; i++) {
            if(toggleMeClass[i].style.display == 'none'){
                toggleMeClass[i].style.display = "list-item";
            }
            else{
                toggleMeClass[i].style.display = "none";
            }
        }
             
    });
    
})