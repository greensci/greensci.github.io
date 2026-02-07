
const messages = [
    "i like the xbox 360",
    "i like to play piano",
    "im using a keyboard from 2010",
    "my display is 1680x1050",
    "i have a windows 7 install disc",
    "my xbox 360 is the fat one",
    "i dont like programming websites",
    "my gpu is a gtx 1070",
    "i like to make games",
    "i want a 3ds",
    "i need a new display",
    "i love music omg",
    "i like soup",
    "i would love to change my cpu since its a r3 3200g",
    "i love linux but i hate it at the same time",
    "hi joris",
    "my studio is greensci systems",
    "i like programming virtual machines",
    "would love to get a pc from 2001",
    "once i had a 3ds but it got stolen :(",
    "once i fell down a wall and broke my arm now i have a scar",
    "ahhghghghghghghghghg",
    "español es mi lenguaje nativo xd",
    "i find breakcore corny",
    "i dont like roblox at all, boring.",
    "viva españa"
];

const randomLettering = document.getElementById('randomLettering');
let previousMessage = -1;


let newIndex;
do {
    newIndex = Math.floor(Math.random() * messages.length);
} while (newIndex === previousMessage && messages.length > 1);
previousMessage = newIndex;

randomLettering.innerHTML = messages[newIndex];

