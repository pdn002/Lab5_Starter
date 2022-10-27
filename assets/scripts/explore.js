// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const synth = window.speechSynthesis;
    const voice_select = document.getElementById('voice-select');
    const text = document.getElementById('text-to-speak');
    const button = document.querySelector('button');

    // need timer to give time for voice list to populate after loading
    setTimeout(function(){
        let voices = synth.getVoices();

        // adds each option like in HTML
        // <option value="value" disabled selected>innerHTML</option>
        for (let i = 0; i < voices.length; i++){
            let option = document.createElement('option');
            option.value = i;
            option.innerHTML = voices[i].name;
            voice_select.appendChild(option);
        }

        // implement speech button
        button.addEventListener('click', function(){
            let say_this = new SpeechSynthesisUtterance(text.value);
            say_this.voice = voices[voice_select.value];
            synth.speak(say_this);
        })

        
    }, 50);
    
}