const b = document.body

const pokemon = document.querySelector("#pokemon")
const pokedex = document.querySelector("#pokedex")
const pokedexCover = document.querySelector("#pokedex-cover")
const pokedexShadow = document.querySelector("#pokedex-shadow")
const pokemonAuthor = document.querySelector("#pokemon-author")

const arrowBack = document.querySelector("#arrow-back")
const arrowNext = document.querySelector("#arrow-next")
const pokemonNumber = document.querySelector("#pokemon-number")
const pokemonName = document.querySelector("#pokemon-name")
const pokemonImage = document.querySelector("#pokemon-image")
const pokemonTag = document.querySelectorAll(".pokemon-tag")

const pokelist =
    [
        /* For Future Pokemons:
        {
        "number": "",
        "name": "",
        "image": "",
        "tagA": '',
        "tagB": '',
        },      
        */
        {
        "number": "01",
        "name": "Bulbasaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "tagA": 'grass',
        "tagB": 'poison',
        },
        {
        "number": "02",
        "name": "Ivysaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        "tagA": 'grass',
        "tagB": 'poison',
        },
        {
        "number": "03",
        "name": "Venusaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        "tagA": 'grass',
        "tagB": 'poison',
        },
        {
        "number": "04",
        "name": "Charmander",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "tagA": 'fire',
        "tagB": '',
        },
        {
        "number": "05",
        "name": "Charmeleon",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        "tagA": 'fire',
        "tagB": '',
        },
        {
        "number": "06",
        "name": "Charizard",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        "tagA": 'fire',
        "tagB": 'flying',
        },    
        {
        "number": "07",
        "name": "Squirtle",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "tagA": 'water',
        "tagB": '',
        },
        {
        "number": "08",
        "name": "Wartortle",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        "tagA": 'water',
        "tagB": '',
        },
        {
        "number": "09",
        "name": "Blastoise",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        "tagA": 'water',
        "tagB": '',
        },
    ]
let con = -1
let cover = 0
// ************************************
// ************************************
let pokedexFunc = (e) => {
    var x = e.pageX / window.innerWidth - 0.5
    var y = e.pageY / window.innerHeight - 0.5

    pokedex.style.transform = `
        perspective(10000px)
        rotateX(${ y * 10  + 55}deg)
        rotateZ(${ -x * 10 + 25}deg)
        translateZ(-5vw)
    `;
}
//---------------------------
let getPokemonFunc = (e) => {

    if( e && e.currentTarget ){
        if (e.currentTarget.id == 'arrow-next' && con < 898) con++
        else if(e.currentTarget.id == 'arrow-back' && con > 0) con--
    }

    pokemonNumber.innerText = pokelist[con].number
    pokemonName.innerText = pokelist[con].name
    pokemonImage.src = pokelist[con].image
    pokemonTag[0].innerText = pokelist[con].tagA
    pokemonTag[1].innerText = pokelist[con].tagB
    pokemonSource.src = pokelist[con].audio
    
}
//---------------------------
let pokedexCoverFunc = () => {
    if (cover % 2 == 0) {
        pokemon.classList.remove('is-pokemon-hidden')
        pokemonNumber.classList.remove('is-pokemon-hidden')
        pokemonAuthor.classList.remove('is-pokemon-hidden')
        pokedexCover.classList.remove('is-pokedex-open')
        pokedexShadow.classList.remove('is-shadow-hidden')
    }
    else{
        pokemon.classList.add('is-pokemon-hidden')
        pokemonNumber.classList.add('is-pokemon-hidden')
        pokemonAuthor.classList.add('is-pokemon-hidden')
        pokedexCover.classList.add('is-pokedex-open')
        pokedexShadow.classList.add('is-shadow-hidden')
        

        pokemonNumber.innerText = ''
        pokemonName.innerText = ''
        pokemonImage.src = ''
        pokemonTag[0].innerText = ''
        pokemonTag[1].innerText = ''
        pokemonSource.src = ''
        con = -1
    }
    cover++
}
// ************************************
// ************************************
b.addEventListener("pointermove", pokedexFunc)
pokedexCover.addEventListener("click", pokedexCoverFunc)
arrowNext.addEventListener("click", getPokemonFunc)
arrowBack.addEventListener("click", getPokemonFunc)