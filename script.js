const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let result = "";
for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
}
document.getElementById("randomLettering").innerHTML = `<span style="letter-spacing: 2px;">${result}</span> <span style="color: var(--accent);">:)</span>`;
document.getElementById('secretPasswordInput').value = "greensci";

function checkifitsgood() {
    var input = document.getElementById('secretPasswordInput').value.trim();
    if (input === "") {
        document.getElementById("randomLettering").innerHTML = "try entering the code above!";
        document.getElementById("randomLettering").style.color = "var(--secondary)";
    }
    else if (input !== result) {


        // Shake animation
        document.getElementById('secretPasswordInput').classList.add('shake');
        setTimeout(() => {
            document.getElementById('secretPasswordInput').classList.remove('shake');
        }, 500);
    } else {
        document.getElementById("randomLettering").innerHTML = "✔ correct! welcome! <span style='color: var(--accent);'>:)</span>";
        document.getElementById("randomLettering").style.color = "var(--primary)";
        document.getElementById('secretPasswordInput').value = "Access granted!";
        document.getElementById('secretPasswordInput').style.borderColor = "var(--primary)";

      
       // Create the button element
var button = document.createElement('button');

// Create the anchor/link element
var link = document.createElement('a');
link.href = 'randompage1.html';
link.textContent = 'Click Here!';

// Append the link to the button
button.appendChild(link);

// Append the button to your carrd element
document.getElementById('carrd').appendChild(button);
        congrats();
    }
}

function congrats() {
    const confettiWrapper = document.querySelector('.confetti-wrapper');
    // Clear previous confetti
    confettiWrapper.innerHTML = '';

    // Generate new confetti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 2}s`);
        confetti.style.setProperty('--confetti-color', getRandomColor());
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confettiWrapper.appendChild(confetti);
    }

    // Add floating animation to profile card
    document.querySelector('.profile-card').classList.add('floating');
}

function getRandomColor() {
    const colors = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add shake animation for wrong attempts
const style = document.createElement('style');
style.textContent = `
            .shake {
                animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
            }
            @keyframes shake {
                10%, 90% { transform: translateX(-2px); }
                20%, 80% { transform: translateX(4px); }
                30%, 50%, 70% { transform: translateX(-6px); }
                40%, 60% { transform: translateX(6px); }
            }
        `;
document.head.appendChild(style);

// Make input submit on Enter key
document.getElementById('secretPasswordInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkifitsgood();
    }
});