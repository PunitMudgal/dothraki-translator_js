const textArea = document.querySelector("#text-area");
const translateButton = document.querySelector(".translate-btn");
const outputArea = document.querySelector(".output-area");

const serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURl(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Rate limit Exceed, 5 times in an hour");
}
console.log(value)
console.log(input)

function clickHandler(){
    const inputText = textArea.value; // taking input

    //calling server for processing
    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        outputArea.innerText = translatedText; // output
    })
    .catch(errorHandler)
}

translateButton.addEventListener("click", clickHandler)