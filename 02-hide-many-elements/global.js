window.addEventListener("load", function(){
    const hideButton = document.getElementById('button')

    hideButton.addEventListener('click', function(e){
        var hideMeCass = document.getElementsByClassName('hide_me')
        for (i = 0; i < hideMeCass.length; i++) {
            hideMeCass[i].style.display = "none";
            
        }
        
    });
    
})
