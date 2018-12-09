
const fs = require('fs');
const path = require('path');
const request = require('request');
const data = require('./pokemon.json');


async function snip(){
    data.forEach((pokemon, i) => {
        let {image,num,name,subname,types} = pokemon;
        let picName = `${num}-${name}-${subname}.png`;
        pokemon.picName = picName;
        setTimeout(_ => {
            request(image).pipe(fs.createWriteStream(path.resolve(__dirname, `./pics/${picName}`)));
        }, i * 300);
    });
    fs.writeFileSync('./data.js', 'var pokemons = ' + JSON.stringify(data, null, 4), 'utf8');
}

snip();