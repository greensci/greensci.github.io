// Binary rain effect
        const binaryRain = document.getElementById('binaryRain');
        const characters = "01";
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.style.position = 'absolute';
            column.style.top = '-50px';
            column.style.left = (i * 20) + 'px';
            column.style.width = '20px';
            column.style.fontSize = '16px';
            column.style.color = '#0a0';
            column.style.textAlign = 'center';
            column.style.wordBreak = 'break-all';
            column.style.height = window.innerHeight + 'px';
            column.style.overflow = 'hidden';
            binaryRain.appendChild(column);

            animateColumn(column);
        }

        function animateColumn(column) {
            let text = '';
            const length = Math.floor(Math.random() * 20) + 10;
            let position = 0;

            for (let i = 0; i < length; i++) {
                text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
            }

            column.innerHTML = text;

            function update() {
                position += 1;
                if (position > length * 1.5) {
                    text = '';
                    for (let i = 0; i < length; i++) {
                        text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
                    }
                    column.innerHTML = text;
                    position = 0;
                }
                column.style.transform = `translateY(${position * 20}px)`;
                requestAnimationFrame(update);
            }

            update();
        }

        // Terminal-like typing effect
        const messages = [
            "The longest English word you can type using just the top row of a QWERTY keyboard is \"Typewriter.\"",
            "There are more possible iterations of a game of chess than atoms in the observable universe.",
            "The first 1GB hard drive weighed over 500 pounds and cost $40,000 in 1980.",
            "The first computer mouse was made of wood.",
            "The \"Computer\" was originally a job title for humans who performed calculations.",
            "The first computer bug was an actual moth found in Harvard's Mark II computer in 1947.",
            "ENIAC, the first electronic computer, weighed more than 27 tons.",
            "The first video game ever created was called \"Tennis for Two\" in 1958.",
            "The first website ever created is still online: http://info.cern.ch",
            "The first digital camera (1975) needed 23 seconds to capture a single image.",
            "The Apollo Guidance Computer had just 64KB of memory and ran at 0.043MHz.",
            "The 'Hello World' tradition started with Kernighan's 1972 C programming manual.",
            "The first web browser was called WorldWideWeb (later Nexus) created by Tim Berners-Lee.",
            "The term 'Wi-Fi' doesn't stand for anything - it was just a catchy name.",
            "The first computer virus was created in 1971 and called 'Creeper'.",
            "The first touchscreen was invented in 1965 by E.A. Johnson for air traffic control.",
            "The 'ZIP' in ZIP files stands for 'Zigzag Inline Package'.",
            "The first computer animation was created in 1960 by Boeing engineers.",
            "The first banner ad (1994) had a 44% click-through rate.",
            "The '404' error comes from room 404 at CERN where the web was invented.",
            "The first spam email was sent in 1978 advertising a DEC computer presentation.",
            "The first Google storage was made from LEGO bricks holding 10 4GB hard drives.",
            "The original Sims game (2000) was coded by a single programmer in 9 months.",
            "The first computer password was implemented at MIT in the 1960s for CTSS.",
            "The 'Bluetooth' name comes from 10th-century Viking king Harald Bluetooth.",
            "The first computer sound was a click from the Manchester Baby in 1948.",
            "The 'Python' language is named after Monty Python, not the snake.",
            "The first emoticon was proposed in 1982 using :-) and :-( in an email.",
            "The 'Java' language was originally called 'Oak' after a tree outside its creator's office.",
            "The first computer network message was 'LO' - the system crashed during 'LOGIN'.",
            "The first computer with a hard drive (1956) could store 5MB - the size of one MP3.",
            "The 'Nintendo' name means 'leave luck to heaven' in Japanese.",
            "The first computer game with graphics was 'Spacewar!' in 1962.",
            "The 'LOL' acronym predates the internet, first appearing in the 1960s.",
            "The 'DOOM' (1993) source code contains comments about ordering pizza.",
            "The first computer sold to consumers was the Simon in 1950 ($600).",
            "The 'Firefox' logo is actually a red panda, not a fox.",
            "The first web search engine was called 'Archie' created in 1990.",
            "The 'Dvorak' keyboard layout can increase typing speed by 20-40% over QWERTY.",
            "The 'Ethernet' standard was inspired by ALOHAnet's radio packet network.",
            "The first computer to beat a chess champion (Deep Blue) used 480 custom chips."
        ];

        const randomLettering = document.getElementById('randomLettering');
        let previousMessage = -1;

        function getRandomMessage() {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * messages.length);
            } while (newIndex === previousMessage && messages.length > 1);
            previousMessage = newIndex;
            return messages[newIndex];
        }

        function typeMessage() {
            let message = "> FACT: " + getRandomMessage();
            let i = 0;
            randomLettering.textContent = "";

            function typing() {
                if (i < message.length) {
                    randomLettering.textContent += message.charAt(i);
                    i++;
                    setTimeout(typing, Math.random() * 25 + 50);
                } else {
                    setTimeout(typeMessage, 3000); // Wait 3 seconds before next message
                }
            }

            typing();
        }

        // Start the typing effect
        typeMessage();
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 12; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        //document.getElementById("randomLettering").innerHTML = `<span style="letter-spacing: 2px;">${result}</span> <span style="color: var(--accent);">:)</span>`;
        document.getElementById('secretPasswordInput').value = "greensci";

        function revealCode() {
            document.getElementById("greenscitexty").innerHTML = "<strong>" + result + " </strong>";
        }
        function checkifitsgood() {
            const input = document.getElementById("secretPasswordInput").value;
            if (input.includes(result)) {
                window.location.href = "https://greensci.github.io/randompage1.html";
            } 
        }