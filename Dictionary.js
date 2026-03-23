function printText(text) {
    document.querySelector("p").innerText = text;
}

function addWord() {
    let word = String(document.getElementById("theWord").value);
    if(word.length > 0) {
        printText("You entered the word: " + word);
        let item = document.createElement("li");
        item.innerText = word;
        document.querySelector("ul").appendChild(item);
        document.getElementById("theWord").value = null;
    } else {
        printText("Please enter a word");
    }
}

function searchWord() {
    let word = String(document.getElementById("theWord").value);
    if(word.length > 0) {
        let words = document.querySelectorAll("li");
        let len = words.length, appears = false;
        for (let i = 0; i < len; ++i) {
            if (words[i].innerText === word) {
                appears = true;
            }
        }
        if (appears) {
            printText("The word " + word + " is in the dictionary");
        } else {
            printText("The word " + word + " is not in the dictionary");
        }
        document.getElementById("theWord").value = null;
    } else {
        printText("Please enter a word");
    }
}