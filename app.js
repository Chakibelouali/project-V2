const button = document.querySelector('.button');
const vinyl = document.querySelector('.vinyl');
const audio = document.querySelector('.audio');  
const stopBtn = document.querySelector('.button-stop');  



button.addEventListener('click', function() {
    vinyl.classList.add('active'); 
    stopBtn.classList.add('shown'); 
    button.classList.add('hidden'); 



    audio.play()
});


stopBtn.addEventListener('click', function() {
    vinyl.classList.remove('active'); 
    stopBtn.classList.remove('shown'); 
    button.classList.remove('hidden'); 



    audio.pause()
});



