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


        const clubs = [
        { nosaukums: "Salaspils Karate Dojo", kateg: "Sports", contact: "+371 29788753" },
            { nosaukums: "Karatē skola", kateg: "Sports", contact: "+371 29777274" },
            { nosaukums: "FK Salaspils", kateg: "Sports", contact: "+371 25614956" },
            { nosaukums: "Salaspils Zīriņi", kateg: "Sports", contact: "+371 20101612" },
            { nosaukums: "Sportiņš bērniem", kateg: "Sports", contact: "+371 29922934" },
            { nosaukums: "Salaspils volejbola klubs", kateg: "Sports", contact: "+371 22009934" },
            { nosaukums: "Salaspils swim team", kateg: "Sports", contact: "+371 29739956" },
            { nosaukums: "Sporta klubs Vētra", kateg: "Sports", contact: "+371 29567696" },
            { nosaukums: "Florbola klubs Saulkalne", kateg: "Sports", contact: "+371 29135863" },
            { nosaukums: "Salaspils galda tenisa klubs", kateg: "Sports", contact: "+371 29233960" },
            { nosaukums: "Mākslas un vingrošanas klubs Grācija", kateg: "Sports", contact: "+371 26513475" },
            { nosaukums: "Peldēšanas klubs Swimland", kateg: "Sports", contact: "+371 22488899" },
            { nosaukums: "Peldēšanas skola Gauja", kateg: "Sports", contact: "+371 24111212" },
            { nosaukums: "KL Tenisa klubs", kateg: "Sports", contact: "+371 29390996" },
            { nosaukums: "Deju ansamblis Karuselis", kateg: "Dejas", contact: "+371 29491491" },
            { nosaukums: "Bērnu deju kolektīvs Sienāzītis", kateg: "Dejas", contact: "+371 26465949" },
            { nosaukums: "Jauniešu deju kolektīvs Austriņš", kateg: "Dejas", contact: "+371 29355482" },
            { nosaukums: "Mūsdienu deju grupa Buras", kateg: "Dejas", contact: "+371 26599335" },
            { nosaukums: "Klasiskās dejas studija Elevè", kateg: "Dejas", contact: "+371 27495735" },
            { nosaukums: "WeDance", kateg: "Dejas", contact: "+371 25600212" },
            { nosaukums: "Vokālais ansamblis Mazputniņi", kateg: "Dziedāšana", contact: "Ilona Koroševska" },
            { nosaukums: "Vokālais ansamblis Dzeltenā zemūdene", kateg: "Dziedāšana", contact: "+371 28255377" },
            { nosaukums: "Vokālais ansamblis Fantāzija", kateg: "Dziedāšana", contact: "+371 29407090" },
            { nosaukums: "Vokālais ansamblis Vālodzīte", kateg: "Dziedāšana", contact: "Ilona Koroševska" },
            { nosaukums: "Jauktais koris Elpa", kateg: "Dziedāšana", contact: "+371 29550385" },
            { nosaukums: "Jauktais koris Lōja", kateg: "Dziedāšana", contact: "+371 20249837" },
            { nosaukums: "Vokālais ansamblis Sunrise", kateg: "Dziedāšana", contact: "+371 29996863" },
            { nosaukums: "Senioru vokālais ansamblis Otrada", kateg: "Dziedāšana", contact: "+371 29996863" },
            { nosaukums: "Senioru vokālais ansamblis Viktorija", kateg: "Dziedāšana", contact: "+371 26521117" },
            { nosaukums: "Pūtēju orķestris Salaspils", kateg: "Dziedāšana", contact: "+371 25620321" }
        ];

        function showClub() {
            const randomClub = clubs[Math.floor(Math.random() * clubs.length)];
            const card = document.getElementById("clubCard");

            card.innerHTML = `
                <h2>${randomClub.nosaukums}</h2>
                <p><strong>Kategorija:</strong> ${randomClub.kateg}</p>
                <p><strong>Tālrunis:</strong> ${randomClub.contact}</p>
            `;
        }
