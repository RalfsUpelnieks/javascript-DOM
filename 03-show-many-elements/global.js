window.addEventListener("load", function(){
    const SHOW_BUTTON = document.getElementById('button')

    SHOW_BUTTON.addEventListener('click', function(e){
        var showMeClass = document.getElementsByClassName('show_me')
        for (i = 0; i < showMeClass.length; i++) {
            showMeClass[i].style.display = "inline";
            
        }
        
    });
    
})
