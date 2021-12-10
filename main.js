// https://i.gifer.com/ZHHh.gif - saske
// https://i.gifer.com/37Ft.gif - saske technique
// https://i.gifer.com/ZHDc.gif - saske technique
// https://i.gifer.com/3gXp.gif - saske runs

const playersSpeed = 20;
const loseGif = 'https://i.gifer.com/4A9v.gif'
const winGif = 'https://i.gifer.com/YOPf.gif'
const endGif = 'https://i.gifer.com/fxy1.gif'

const container = document.querySelector('.arenas')
const SharapaGorg = {
    name: 'SharapaGorg',
    player: 1,
    hp: '100',
    img: 'https://i.gifer.com/5Q15.gif',
    weapon: [
        {
            name: 'chidori',
            src: 'https://i.gifer.com/ZMQt.gif',
            during: 2700
        },
        {
            name: 'foot hit',
            src: 'https://i.gifer.com/2iHn.gif',
            during: 1150
        },
        {
            name : 'foot hit 2',
            src : 'https://i.gifer.com/ZLBh.gif',
            during : 1000
        }
    ],
    attack: (weaponIndex) => {
        console.log(SharapaGorg.name + ' [' + SharapaGorg.weapon[weaponIndex].name + '] attacked')
        container.querySelector('.player1').getElementsByTagName('img')[0].src = SharapaGorg.weapon[weaponIndex].src
        let timer0 = setInterval(() => {
            container.querySelector('.player1').getElementsByTagName('img')[0].src = SharapaGorg.img
            clearInterval(timer0)
        }, SharapaGorg.weapon[weaponIndex].during)
    }
}
const AlexeyZavar = {
    name: 'AlexeyZavar',
    player: 2,
    hp: '100',
    img: 'https://i.gifer.com/Yrhj.gif',
    weapon: [
        {
            name: '1',
            src: 'https://i.gifer.com/ZAbo.gif',
            during: 900
        },
        {
            name: '2',
            src: 'https://i.gifer.com/6Vac.gif',
            during: 900
        },
        {
            name: '3',
            src: 'https://i.gifer.com/WiCG.gif',
            during: 3500
        }
    ],
    attack: (weaponIndex) => {
        console.log(AlexeyZavar.name + ' [' + AlexeyZavar.weapon[weaponIndex].name + '] attacked')
        container.querySelector('.player2').getElementsByTagName('img')[0].src = AlexeyZavar.weapon[weaponIndex].src
        let timer4 = setInterval(() => {
            container.querySelector('.player2').getElementsByTagName('img')[0].src = AlexeyZavar.img
            clearInterval(timer4)
        }, AlexeyZavar.weapon[weaponIndex].during)
    }
}

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

function keyHandler(e) {
    let player1 = container.querySelector('.player1')
    let player2 = container.querySelector('.player2')

    let player1Left = player1.style.left

    let player2Right = player2.style.left

    switch (e.which) {
        // player 1
        case 90: // z
            // first technique
            SharapaGorg.attack(0);

            break
        case 88: // x
            // second technique

            SharapaGorg.attack(1)
            break
        case 67: // third technique (c)
            SharapaGorg.attack(2)
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
        case 188:
            AlexeyZavar.attack(0)
            break
        case 190:
            AlexeyZavar.attack(1)
            break
        case 191:
            AlexeyZavar.attack(2)
            break
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeHp(player) {
    let lifeBar = container.querySelector(`.player${player.player} .life`)
    let damage = getRandomInt(30);

    player.hp -= damage
    lifeBar.style.width = player.hp + '%'

    console.log(damage + 'hp damage is taken from ' + player.name)

    if (player.hp <= 0) {
        let winner = player.player === 1 ? AlexeyZavar : SharapaGorg
        let winTitle = document.createElement('div')
        winTitle.className = 'loseTitle'
        winTitle.innerText = winner.name + ' WINS'

        container.appendChild(winTitle)
        let playerImg =  container.getElementsByTagName('img')[player.player - 1]
        let winnerImg = container.getElementsByTagName('img')[player.player === 0 ? 1 : 0]

        setInterval(() => {
            // playerImg.src = loseGif
            // winnerImg.src = winGif
            playerImg.src = 'https://i.gifer.com/ZHHh.gif'
            winnerImg.src = 'https://i.gifer.com/5Mys.gif'
        }, 1500)
        container.style.backgroundImage = 'url(' + endGif + ')'

        console.warn(winner.name + ' WINS')
        document.querySelector('.button').disabled = true
    }
}

document.addEventListener('keydown', keyHandler)

let randomButton = document.querySelector('.button')
randomButton.onclick = () => {
    let damagedPlayer = getRandomInt(2)

    if (damagedPlayer === 0) {
        changeHp(AlexeyZavar)
        SharapaGorg.attack(getRandomInt(SharapaGorg.weapon.length))
    } else {
        changeHp(SharapaGorg)
        AlexeyZavar.attack(getRandomInt(AlexeyZavar.weapon.length))
    }

}