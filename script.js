// https://tw.portal-pokemon.com/play/pokedex
((list) => {
    let map = [];
    list.forEach(box => {
        let item = {};
        item.image = box.querySelector('img').src;
        item.num = box.querySelector('.pokemon-list--box__no').textContent;
        item.name = box.querySelector('.pokemon-list--box__name').textContent;
        item.subname = box.querySelector('.pokemon-list--box__subname').textContent;
        item.types = box.querySelector('.pokemon-list--box__types').textContent.split('\n');
        map.push(item);
    });
    window.__pokemon = map;
})(Array.from($$('.pokemon-list--box')))
