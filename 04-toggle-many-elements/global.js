// Your JavaScript goes here.
window.addEventListener("load", function(){
    const toggleButton = document.getElementById('button')

    toggleButton.addEventListener('click', function(e){
        var toggleMeCass = document.getElementsByClassName('toggle_me')
        if(toggleMeCass[0].style.display == 'none'){
            for (i = 0; i < toggleMeCass.length; i++) {
                toggleMeCass[i].style.display = "inline";
            }
        }
        else{
            for (i = 0; i < toggleMeCass.length; i++) {
                toggleMeCass[i].style.display = "none";
                
            }
        }
            
        
        
    });
    
})