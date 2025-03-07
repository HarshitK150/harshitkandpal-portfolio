// JSON object with sound links
const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"};


// Color of a white key
const whiteKeyColor = 'rgb(255, 255, 255)';

// Color of a white key when pressed
const whiteKeyDownColor = 'rgb(150, 150, 150)';

// Color of a black key
const blackKeyColor = 'rgb(0, 0, 0)';

// Color of a black key when pressed
const blackKeyDownColor = 'rgb(100, 100, 100)';

// Action performed when a key is pressed
const keyPressAction = function(event) {
    // Play the audio
    let note = new Audio(sound[event.keyCode]);
    note.play();

    // Key color change effect
    switch(event.keyCode) {
        case 65:
            keyA.style.backgroundColor = whiteKeyDownColor;
            break;
        case 83:
            keyS.style.backgroundColor = whiteKeyDownColor;
            break;
        case 68:
            keyD.style.backgroundColor = whiteKeyDownColor;
            break;
        case 70:
            keyF.style.backgroundColor = whiteKeyDownColor;
            break;
        case 71:
            keyG.style.backgroundColor = whiteKeyDownColor;
            break;
        case 72:
            keyH.style.backgroundColor = whiteKeyDownColor;
            break;
        case 74:
            keyJ.style.backgroundColor = whiteKeyDownColor;
            break;
        case 75:
            keyK.style.backgroundColor = whiteKeyDownColor;
            break;
        case 76:
            keyL.style.backgroundColor = whiteKeyDownColor;
            break;
        case 186:
            keySemicolon.style.backgroundColor = whiteKeyDownColor;
            break;
        case 87:
            keyW.style.backgroundColor = blackKeyDownColor;
            break;
        case 69:
            keyE.style.backgroundColor = blackKeyDownColor;
            break;
        case 84:
            keyT.style.backgroundColor = blackKeyDownColor;
            break;
        case 89:
            keyY.style.backgroundColor = blackKeyDownColor;
            break;
        case 85:
            keyU.style.backgroundColor = blackKeyDownColor;
            break;
        case 79:
            keyO.style.backgroundColor = blackKeyDownColor;
            break;
        case 80:
            keyP.style.backgroundColor = blackKeyDownColor;
            break;
    }

    // Check for the secret string
    eighth = seventh;
    seventh = sixth;
    sixth = fifth;
    fifth = fourth;
    fourth = third;
    third = second;
    second = first;
    first = event.keyCode;

    if ((first === 85) && (second === 79) && (third === 89) && (fourth === 69)
        && (fifth === 69) && (sixth === 83) && (seventh === 69) && (eighth === 87)) {
            let sound = new Audio('https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1');
            sound.play();

        piano[0].style.display = 'none';
        creature.style.height = 'auto';
        creature.style.visibility = 'visible';
        creature.style.opacity = '1';

        document.removeEventListener('keydown', keyPressAction);
        document.removeEventListener('keyup', keyUpAction);

        keyboard[0].removeEventListener('mouseover', hoverAction)
        keyboard[0].removeEventListener('mouseout', hoverRemove)
    }
};

// Action performed when a pressed key is lifted
const keyUpAction = function(event) {
    switch(event.keyCode) {
        case 65:
            keyA.style.backgroundColor = whiteKeyColor;
            break;
        case 83:
            keyS.style.backgroundColor = whiteKeyColor;
            break;
        case 68:
            keyD.style.backgroundColor = whiteKeyColor;
            break;
        case 70:
            keyF.style.backgroundColor = whiteKeyColor;
            break;
        case 71:
            keyG.style.backgroundColor = whiteKeyColor;
            break;
        case 72:
            keyH.style.backgroundColor = whiteKeyColor;
            break;
        case 74:
            keyJ.style.backgroundColor = whiteKeyColor;
            break;
        case 75:
            keyK.style.backgroundColor = whiteKeyColor;
            break;
        case 76:
            keyL.style.backgroundColor = whiteKeyColor;
            break;
        case 186:
            keySemicolon.style.backgroundColor = whiteKeyColor;
            break;
        case 87:
            keyW.style.backgroundColor = blackKeyColor;
            break;
        case 69:
            keyE.style.backgroundColor = blackKeyColor;
            break;
        case 84:
            keyT.style.backgroundColor = blackKeyColor;
            break;
        case 89:
            keyY.style.backgroundColor = blackKeyColor;
            break;
        case 85:
            keyU.style.backgroundColor = blackKeyColor;
            break;
        case 79:
            keyO.style.backgroundColor = blackKeyColor;
            break;
        case 80:
            keyP.style.backgroundColor = blackKeyColor;
            break;
    }
};

// White keys
const keyA = document.getElementById('A');
const keyS = document.getElementById('S');
const keyD = document.getElementById('D');
const keyF = document.getElementById('F');
const keyG = document.getElementById('G');
const keyH = document.getElementById('H');
const keyJ = document.getElementById('J');
const keyK = document.getElementById('K');
const keyL = document.getElementById('L');
const keySemicolon = document.getElementById('Semicolon');

// Black keys
const keyW = document.getElementById('W');
const keyE = document.getElementById('E');
const keyT = document.getElementById('T');
const keyY = document.getElementById('Y');
const keyU = document.getElementById('U');
const keyO = document.getElementById('O');
const keyP = document.getElementById('P');


// Eight variables to check for the secret string
let first = null;
let second = null;
let third = null;
let fourth = null;
let fifth = null;
let sixth = null;
let seventh = null;
let eight = null;

// The piano
const piano = document.getElementsByClassName('piano');

// The Creature
const creature = document.getElementById('image-wrapper');

// Add listeners for keydown and keyup
document.addEventListener('keydown', keyPressAction);
document.addEventListener('keyup', keyUpAction);

// Action performed when mouse hovers over any key
const hoverAction = function() {
    for (let index = 0; index < keys.length; index++) {
        keys[index].style.visibility = 'visible';
    }
};

// Action performed when mouse stops hovering over the keys
const hoverRemove = function() {
    for (let index = 0; index < keys.length; index++) {
        keys[index].style.visibility = 'hidden';
    }
};

// The area consisting of all keys
const keyboard = document.getElementsByClassName('keys');

// An array of all keys
const keys = document.getElementsByClassName('key')

//Add listener for hover
keyboard[0].addEventListener('mouseover', hoverAction)
keyboard[0].addEventListener('mouseout', hoverRemove)