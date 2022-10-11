var myT = document.getElementById("text");
var cOunt = document.getElementById("count");
var limit = 500;
cOunt.textContent = 0 + "/" + limit;

myT.addEventListener("input", function () {
    var textLength = myT.value.length;
    cOunt.textContent = textLength + "/" + limit;

    if (textLength > limit) {
        myT.style.borderColor = "#ff2851";
        cOunt.style.color = "#ff2851";
    }
    else {
        myT.style.borderColor = "#b2b2b2";
        cOunt.style.color = "#737373";
    }
});

const textEl = document.getElementById('text');
    const speakEl = document.getElementById('start');
    const stopEl = document.getElementById('stop');

    speakEl.addEventListener('click', speakText);
    stopEl.addEventListener('click', stopText);

    function speakText() {
        window.speechSynthesis.cancel();

        const text = textEl.value;
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function stopText() {
        window.speechSynthesis.cancel();
    }