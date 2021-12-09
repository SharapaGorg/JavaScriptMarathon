//https://i.gifer.com/6x4v.gif - naruto
// https://i.gifer.com/ZJF5.gif - fire ball
// https://i.gifer.com/6md.gif - simpson
// https://i.gifer.com/PcUC.gif
// https://i.gifer.com/YAS0.gif
// https://i.gifer.com/ZbpB.gif
// https://i.gifer.com/5Mys.gif
// https://i.gifer.com/2r6C.gif - naruto1
// https://i.gifer.com/ZHHh.gif - saske

const container = document.getElementsByClassName('arenas')[0]

const SharapaGorg = {
    name    : 'SharapaGorg',
    hp      : '1000',
    img     : 'https://i.gifer.com/ZHHh.gif',
    weapon  : ['vue.js', 'nuxt.js'],
    attack  : () => {
        console.log(SharapaGorg.name + ' Fight...')
    }

}

const AlexeyZavar = {
    name    : 'AlexeyZavar',
    hp      : '1000',
    img     : 'https://i.gifer.com/5Mys.gif',
    weapon  : ['ASPNET', 'flask'],
    attack  : () => {
        console.log(AlexeyZavar.name + ' Fight...')
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
