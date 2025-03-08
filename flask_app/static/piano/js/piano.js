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

                
// Action performed when a key is pressed
const keyPressAction = function(event) {
    // Play the audio
    let note = new Audio(sound[event.keyCode]);
    note.play();

    // Key color change effect
    switch(event.keyCode) {
        case 65:
            keyA.classList.add('white-down');
            break;
        case 83:
            keyS.classList.add('white-down');
            break;
        case 68:
            keyD.classList.add('white-down');
            break;
        case 70:
            keyF.classList.add('white-down');
            break;
        case 71:
            keyG.classList.add('white-down');
            break;
        case 72:
            keyH.classList.add('white-down');
            break;
        case 74:
            keyJ.classList.add('white-down');
            break;
        case 75:
            keyK.classList.add('white-down');
            break;
        case 76:
            keyL.classList.add('white-down');
            break;
        case 186:
            keySemicolon.classList.add('white-down');
            break;
        case 87:
            keyW.classList.add('black-down');
            break;
        case 69:
            keyE.classList.add('black-down');
            break;
        case 84:
            keyT.classList.add('black-down');
            break;
        case 89:
            keyY.classList.add('black-down');
            break;
        case 85:
            keyU.classList.add('black-down');
            break;
        case 79:
            keyO.classList.add('black-down');
            break;
        case 80:
            keyP.classList.add('black-down');
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

        piano[0].classList.add('hidden');
        creature.classList.add('appear');

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
            keyA.classList.remove('white-down');
            break;
        case 83:
            keyS.classList.remove('white-down');
            break;
        case 68:
            keyD.classList.remove('white-down');
            break;
        case 70:
            keyF.classList.remove('white-down');
            break;
        case 71:
            keyG.classList.remove('white-down');
            break;
        case 72:
            keyH.classList.remove('white-down');
            break;
        case 74:
            keyJ.classList.remove('white-down');
            break;
        case 75:
            keyK.classList.remove('white-down');
            break;
        case 76:
            keyL.classList.remove('white-down');
            break;
        case 186:
            keySemicolon.classList.remove('white-down');
            break;
        case 87:
            keyW.classList.remove('black-down');
            break;
        case 69:
            keyE.classList.remove('black-down');
            break;
        case 84:
            keyT.classList.remove('black-down');
            break;
        case 89:
            keyY.classList.remove('black-down');
            break;
        case 85:
            keyU.classList.remove('black-down');
            break;
        case 79:
            keyO.classList.remove('black-down');
            break;
        case 80:
            keyP.classList.remove('black-down');
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
        keys[index].classList.add('key-hover');
    }
};

// Action performed when mouse stops hovering over the keys
const hoverRemove = function() {
    for (let index = 0; index < keys.length; index++) {
        keys[index].classList.remove('key-hover');
    }
};

// The area consisting of all keys
const keyboard = document.getElementsByClassName('keys');

// An array of all keys
const keys = document.getElementsByClassName('key')

//Add listener for hover
keyboard[0].addEventListener('mouseover', hoverAction)
keyboard[0].addEventListener('mouseout', hoverRemove)