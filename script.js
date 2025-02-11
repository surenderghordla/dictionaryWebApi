const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    let inpValue = input.value
    try {
        fetch(`${url}${inpValue}`)
            .then((Response) => Response.json())
            .then((data) => {
                result.innerHTML = `
                <div class="word">
                    <h3>${inpValue}</h3>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>
        `})
    }catch(err){
        result.innerHTML = err;
    }
})