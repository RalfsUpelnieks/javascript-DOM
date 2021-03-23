window.addEventListener("load", function(){
    const HIDE_BUTTON = document.getElementById('button')

    HIDE_BUTTON.addEventListener('click', function(e){
        var hideMeClass = document.getElementsByClassName('hide_me')
        for (i = 0; i < hideMeClass.length; i++) {
            hideMeClass[i].style.display = "none";
            
        }
        
    });
    
})
