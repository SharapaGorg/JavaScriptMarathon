const container = document.getElementsByClassName('arenas')[0]

const SharapaGorg = {
    name    : 'SharapaGorg',
    hp      : '1000',
    img     : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon  : ['vue.js', 'nuxt.js'],
    attack  : () => {
        console.log(SharapaGorg.name + ' Fight...')
    }

}

const AlexeyZavar = {
    name    : 'AlexeyZavar',
    hp      : '1000',
    img     : 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
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
