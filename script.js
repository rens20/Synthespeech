const button = document.getElementById("speech-button");
 button.addEventListener("click", () => {
   const textInput = document.getElementById("text-input").value;
   const speech = new SpeechSynthesisUtterance();
   speech.text = textInput;
   window.speechSynthesis.speak(speech);
 });