function press() {
    let word = String(document.getElementById("theWord").value);
    if (word.length > 0) {
        let option = document.getElementById("choice");
        if (option.value === "Enter a word") {
            document.querySelector("p").innerText = "You entered the word: " + word;
            let item = document.createElement("li");
            item.innerText = word;
            document.querySelector("ul").appendChild(item);
            document.getElementById("theWord").value = null;
        } else if (option.value === "Search a word") {
            let words = document.querySelectorAll("li");
            let len = words.length, appears = false;
            for (let i = 0; i < len; ++i) {
                if (words[i].innerText === word) {
                    appears = true;
                }
            }
            if (appears) {
                document.querySelector("p").innerText = "The word " + word + " is in the dictionary";
            } else {
                document.querySelector("p").innerText = "The word " + word + " is not in the dictionary";
            }
            document.getElementById("theWord").value = null;
        }
    } else {
        document.querySelector("p").innerText = "Please enter a word";
    }
}