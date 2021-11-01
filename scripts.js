let textToConvert = document.getElementById("text");

// convert to upper case
function toUpper(textIn) {
  return textIn.toUpperCase();
}

let upperCase = document.getElementById("upper-case");
upperCase.addEventListener("click", function () {
  textToConvert.value = toUpper(textToConvert.value);
});

// convert to lower case
function toLower(textIn) {
  return textIn.toLowerCase();
}

let lowerCase = document.getElementById("lower-case");
lowerCase.addEventListener("click", function () {
  textToConvert.value = toLower(textToConvert.value);
});

// convert to proper case
function toProper(textIn) {
  return textIn.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
    return $1.toUpperCase();
  });
}

let properCase = document.getElementById("proper-case");
properCase.addEventListener("click", function () {
  textToConvert.value = toProper(textToConvert.value);
});

// convert to sentence case
function toSentence(textIn) {
  return textIn.toLowerCase().replace(/(^\w|\.\s*\w)/gi, function ($1) {
    return $1.toUpperCase();
  });
}

let sentenceCase = document.getElementById("sentence-case");
sentenceCase.addEventListener("click", function () {
  textToConvert.value = toSentence(textToConvert.value);
});

// save text file
let saveTextFile = document.getElementById("save-text-file");
saveTextFile.addEventListener("click", function () {
  download("text.txt", textToConvert.value);
});

function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
