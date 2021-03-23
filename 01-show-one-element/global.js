window.addEventListener("load", function(){

  const MORE_BUTTON = document.getElementById('more_text_link');

  MORE_BUTTON.addEventListener('click', function(){
    document.getElementById('more_text_content').style = "inline";
    MORE_BUTTON.style.display = "none";
  });
  
}); 