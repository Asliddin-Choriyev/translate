const translateBtn = document.getElementById("translate-btn");
const translatedText = document.getElementById("translatedText");

async function translate(text, from, to) {
  const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${from}%7C${to}&q=${text}&mt=1&onlyprivate=0&de=a%40b.c`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4f226a30dcmshd67f581a7287504p121251jsnd23c3c7e7ec7",
      "X-RapidAPI-Host":
        "translated-mymemory---translation-memory.p.rapidapi.com",
    },
  };

  async function makeRequest() {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const result = data.responseData.translatedText;
      translatedText.innerHTML = result;
    } catch (error) {
      console.error(error);
    }
  }

  makeRequest();
}

translateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = document.getElementById("inputText").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  if (inputText && from && to) {
    translate(inputText, from, to);
  } else {
  }
});
