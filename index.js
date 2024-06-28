

let speech = new SpeechSynthesisUtterance();
let voiceIs = [];

let setVoice = document.querySelector('select')

window.speechSynthesis.onvoiceschanged = () =>{
    voiceIs = window.speechSynthesis.getVoices();
    speech.voice = voiceIs[0]

    voiceIs.forEach((voice,i) =>{
        setVoice.options[i] = new Option(voice.name,i)
    })

    setVoice.addEventListener('change',() =>{
        speech.voice = voiceIs[setVoice.value]
    })
}

document.querySelector('button').addEventListener('click',()=>{
    speech.text= document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech)
})