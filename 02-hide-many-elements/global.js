window.addEventListener("load", function(){
    const HIDE_BUTTON = document.getElementById('button');
    var hideMeClass = document.getElementsByClassName('hide_me');

    HIDE_BUTTON.addEventListener('click', function(){
        for (i = 0; i < hideMeClass.length; i++) {
            hideMeClass[i].style.display = "none";
        }
    });
    
});
