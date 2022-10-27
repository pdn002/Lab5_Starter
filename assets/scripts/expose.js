// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    
    // Implement images
    const horn_select = document.getElementById('horn-select');
    horn_select.addEventListener('change', function(){
        if (horn_select.value == 'air-horn'){
            document.querySelector('img').src = 'assets/images/air-horn.svg';
            document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
        }
        if (horn_select.value == 'car-horn'){
            document.querySelector('img').src = 'assets/images/car-horn.svg';
            document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
        }
        if (horn_select.value == 'party-horn'){
            document.querySelector('img').src = 'assets/images/party-horn.svg';
            document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
        }
    })

    // implement sound for play button
    const play_button = document.querySelector('button');
    const jsConfetti = new JSConfetti();
    play_button.addEventListener('click', function(){

        // confetti for party horn
        if (horn_select.value == 'party-horn'){
            jsConfetti.addConfetti();
        }

        document.querySelector('audio').play();
    })

    // implement volume controls
    const volume = document.getElementById('volume');
    volume.addEventListener('change', function(){
        if (volume.value == 0){
            document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-0.svg';
            document.querySelector('audio').volume = 0;
        }
        else if (volume.value >= 1 && volume.value < 33){
            document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-1.svg';
            document.querySelector('audio').volume = .01 * volume.value;
        }
        else if (volume.value >= 33 && volume.value < 67){
            document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-2.svg';
            document.querySelector('audio').volume = .01 * volume.value;
        }
        else{
            document.querySelectorAll('img')[1].src = 'assets/icons/volume-level-3.svg';
            document.querySelector('audio').volume = .01 * volume.value;
        }
    })
}