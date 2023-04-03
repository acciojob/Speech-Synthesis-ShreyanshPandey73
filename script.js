// Your script here.
// Your script here.
const voicesDropdown = document.querySelector('#voices');
const textarea = document.querySelector('#textarea');
const rate = document.querySelector('#rate');
const pitch = document.querySelector('#pitch');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

// Populate the voices dropdown
function populateVoices() {
  const voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Start speaking
function speak() {
  // Create a new SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance(textarea.value);

  // Set the selected voice
  const selectedVoice = voicesDropdown.value;
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.name === selectedVoice);
  utterance.voice = voice;

  // Set the rate and pitch
  utterance.rate = rate.value;
  utterance.pitch = pitch.value;
