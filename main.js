// https://i.gifer.com/PcUC.gif
// https://i.gifer.com/YAS0.gif
// https://i.gifer.com/ZbpB.gif
// https://i.gifer.com/5Mys.gif
// https://i.gifer.com/2r6C.gif - naruto1
// https://i.gifer.com/79eC.gif - naruto technique
// https://i.gifer.com/ZHHh.gif - saske
// https://i.gifer.com/37Ft.gif - saske technique
// https://i.gifer.com/ZHDc.gif - saske technique

const playersSpeed = 20;

const container = document.getElementsByClassName('arenas')[0]
const SharapaGorg = {
    name: 'SharapaGorg',
    hp: '1000',
    img: 'https://i.gifer.com/ZHHh.gif',
    weapon: [
        {
            name: 'chidori',
            src: './assets/37Ft.gif',
            during: 3000
        },
        {
            name: 'foot hit',
            src: 'https://i.gifer.com/ZHDc.gif',
            during: 1000
        }
    ],
    attack: (weapon) => {
        console.log(SharapaGorg.name + ' [' + weapon + '] attacked')
    }
}
const AlexeyZavar = {
    name: 'AlexeyZavar',
    hp: '1000',
    img: 'https://i.gifer.com/5Mys.gif',
    weapon: ['ASPNET', 'flask'],
    attack: (weapon) => {
        console.log(SharapaGorg.name + ' [' + weapon + '] attacked')
    }
}
let break_ = false;

function createPlayer(className_, player) {
    let playerObject, progressBar, character, life, name, image;
    playerObject = document.createElement('div');
    progressBar = document.createElement('div');
    character = document.createElement('div');
    life = document.createElement('div');
    name = document.createElement('div');
    image = document.createElement('img');

    playerObject.className = className_;
    progressBar.className = 'progressbar';
    character.className = 'character';
    life.className = 'life';
    name.className = 'name';
    image.src = player.img;
    name.innerText = player.name;

    playerObject.appendChild(progressBar);
    playerObject.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(image);

    container.appendChild(playerObject)
}

createPlayer('player1', SharapaGorg);
createPlayer('player2', AlexeyZavar);

let player1 = container.getElementsByClassName('player1')[0]
let player2 = container.getElementsByClassName('player2')[0]

// let techniqueLasts = false;

document.onkeydown = (e) => {
    let player1Left = player1.style.left

    let player2Right = player2.style.left

    switch (e.which) {
        // player 1
        case 90:
            // first technique
            let techniqueLasts = true;
            player1.getElementsByTagName('img')[0].src = SharapaGorg.weapon[0].src
            let timer = setInterval(() => {
                if (techniqueLasts) {
                    player1.getElementsByTagName('img')[0].src = SharapaGorg.weapon[0].src
                }
                else {
                    player1.getElementsByTagName('img')[0].src = SharapaGorg.img
                }
                techniqueLasts = false

            }, SharapaGorg.weapon[0].during)

            break

        case 87:
            // top1
            break
        case 65:
            // left1
            if (!player1Left) {
                player1Left = '0px'
            }
            player1.style.left = parseInt(player1Left) - playersSpeed + 'px'
            break
        case 68:
            // right1
            if (!player1Left) {
                player1Left = '0px'
            }
            player1.style.left = parseInt(player1Left) + playersSpeed + 'px'
            break
        case 40:
            // bottom1
            break
        // player 2
        case 37:
            if (!player2Right) {
                player2Right = '0px'
            }
            player2.style.left = parseInt(player2Right) - playersSpeed + 'px'
            break
        case 38:
            console.log('top2')
            break
        case 39:
            if (!player2Right) {
                player2Right = '0px'
            }
            player2.style.left = parseInt(player2Right) + playersSpeed + 'px'

            break
        case 40:
            console.log('bottom2')
            break
        default:
            //
            break
    }
}

document.onkeyup = (e) => {
    switch (e.which) {
        case 90: // z
        //
    }
}