window.addEventListener("load", function(){
    const SHOW_BUTTON = document.getElementById('button');
    var showMeClass = document.getElementsByClassName('show_me');

    SHOW_BUTTON.addEventListener('click', function(){
        for (i = 0; i < showMeClass.length; i++) {
            showMeClass[i].style.display = "inline";
        };
    });
});
