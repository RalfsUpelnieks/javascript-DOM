// Your JavaScript goes here.
window.addEventListener("load", function(){
    const TOGGLE_BUTTON = document.getElementById('button');
    var toggleMeClass = document.getElementsByClassName('toggle_me');

    TOGGLE_BUTTON.addEventListener('click', function(){

        for (i = 0; i < toggleMeClass.length; i++) {
            if(toggleMeClass[i].style.display == 'none'){
                toggleMeClass[i].style.display = "inline";
            }
            else{
                toggleMeClass[i].style.display = "none";
            }
        }
    });  
})