        let randomNumber = Math.floor(Math.random() * 10) + 1;

        function checkGuess() {
            const guess = Number(document.getElementById("guess").value);
            const message = document.getElementById("message");

            if (guess === randomNumber) {
                message.textContent = "Pareizi! Tu uzminēji!";
                message.style.color = "yellow";
            } else if (guess < randomNumber) {
                message.textContent = "Par mazu! Mēģini vēlreiz.";
                message.style.color = "white";
            } else {
                message.textContent = "Par lielu! Mēģini vēlreiz.";
                message.style.color = "white";
            }
        }