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
    play_button.addEventListener('click', function(){
        document.querySelector('audio').play();
    })

    // implement volume controls
    const volume = document.getElementById('volume');
}