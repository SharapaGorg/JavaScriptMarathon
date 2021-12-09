// https://i.gifer.com/PcUC.gif
// https://i.gifer.com/YAS0.gif
// https://i.gifer.com/ZbpB.gif
// https://i.gifer.com/5Mys.gif
// https://i.gifer.com/2r6C.gif - naruto1
// https://i.gifer.com/79eC.gif - naruto technique
// https://i.gifer.com/ZHHh.gif - saske
// https://i.gifer.com/37Ft.gif - saske technique
// https://i.gifer.com/ZHDc.gif - saske technique

const container = document.getElementsByClassName('arenas')[0]

const SharapaGorg = {
    name    : 'SharapaGorg',
    hp      : '1000',
    img     : 'https://i.gifer.com/ZHHh.gif',
    weapon  : ['vue.js', 'nuxt.js'],
    attack  : (weapon) => {
        console.log(SharapaGorg.name + ' [' + weapon + '] attacked')
    }
}

const AlexeyZavar = {
    name    : 'AlexeyZavar',
    hp      : '1000',
    img     : 'https://i.gifer.com/5Mys.gif',
    weapon  : ['ASPNET', 'flask'],
    attack  : (weapon) => {
        console.log(SharapaGorg.name + ' [' + weapon + '] attacked')
    }
}


function createPlayer(className_, player) {
    let playerObject, progressBar, character, life, name, image;
    playerObject    = document.createElement('div');
    progressBar     = document.createElement('div');
    character       = document.createElement('div');
    life            = document.createElement('div');
    name            = document.createElement('div');
    image           = document.createElement('img');

    playerObject.className  = className_;
    progressBar.className   = 'progressbar';
    character.className     = 'character';
    life.className          = 'life';
    name.className          = 'name';
    image.src               = player.img

    playerObject.appendChild(progressBar);
    playerObject.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(image);

    container.appendChild(playerObject)
}

createPlayer('player1', SharapaGorg);
createPlayer('player2', AlexeyZavar);
