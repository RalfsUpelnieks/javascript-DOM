window.addEventListener("load", function(){
    const showButton = document.getElementById('button')

    showButton.addEventListener('click', function(e){
        var showMeCass = document.getElementsByClassName('show_me')
        for (i = 0; i < showMeCass.length; i++) {
            showMeCass[i].style.display = "inline";
            
        }
        
    });
    
})
