const a = [{
    letra: 'a',
    desc: 'Planta grande',
    respuesta: 'ARBOL',
    contiene: false,
},
{
    letra: 'b',
    desc: 'Animal que aparece en shrek',
    respuesta: 'BURRO',
    contiene: false,
},
{
    letra: 'c',
    desc: 'ANIMAL DEL DESIERTO',
    respuesta: 'CAMELLO',
    contiene: false,
},
{
    letra: 'd',
    desc: 'Reptil extinto',
    respuesta: 'DINOSAURIO',
    contiene: false,
},
{
    letra: 'e',
    desc: 'Construccion urbana',
    respuesta: 'EDIFICIO',
    contiene: false,
},
{
    letra: 'f',
    desc: 'Adjetivo despectivo',
    respuesta: 'FEO',
    contiene: false,
},
{
    letra: 'g',
    desc: 'Adjetivo persona obesa',
    respuesta: 'GORDO',
    contiene: false,
},
{
    letra: 'h',
    desc: 'Ponen las gallinas',
    respuesta: 'HUEVO',
    contiene: false,
},
{
    letra: 'i',
    desc: 'Reptil',
    respuesta: 'IGUANA',
    contiene: false,
},
{
    letra: 'j',
    desc: 'Tienen los niños',
    respuesta: 'JUGUETES',
    contiene: false,
},
{
    letra: 'l',
    desc: 'Material de una bufanda',
    respuesta: 'LANA',
    contiene: false,
},
{
    letra: 'm',
    desc: 'Referido a maternidad',
    respuesta: 'MAMA',
    contiene: false,
},
{
    letra: 'n',
    desc: 'Citrico y color',
    respuesta: 'NARANJA',
    contiene: false,
},
{
    letra: 'ñ',
    desc: 'Animal propio de Uruguay',
    respuesta: 'ÑANDU',
    contiene: false,
},
{
    letra: 'o',
    desc: 'Garoto es una marca de este producto',
    respuesta: 'CHOCOLATE',
    contiene: true,
},
{
    letra: 'p',
    desc: 'Ave semi acuatico',
    respuesta: 'PATO',
    contiene: false,
},
{
    letra: 'q',
    desc: 'Alimento lacteo',
    respuesta: 'QUESO',
    contiene: false,
},
{
    letra: 'r',
    desc: 'Animal que persiguen los gatos',
    respuesta: 'RATON',
    contiene: false,
},
{
    letra: 's',
    desc: 'Centro del sistema solar',
    respuesta: 'SOL',
    contiene: false,
},
{
    letra: 't',
    desc: 'Donde tomamos te',
    respuesta: 'TAZA',
    contiene: false,
},
{
    letra: 'u',
    desc: 'Herramienta para tomar sopa',
    respuesta: 'CUCHARA',
    contiene: true,
},
{
    letra: 'v',
    desc: 'Hay mucho en la rambla. Clima',
    respuesta: 'VIENTO',
    contiene: false,
},
{
    letra: 'x',
    desc: 'Instrumento',
    respuesta: 'XILOFONO',
    contiene: false,
},
{
    letra: 'y',
    desc: 'Parte de dentro del huevo',
    respuesta: 'YEMA',
    contiene: true,
},
{
    letra: 'z',
    desc: 'Calzado',
    respuesta: 'ZAPATO',
    contiene: false,
}
];
const ul = document.getElementById('lista');

let i = 0;
let player = 'player1';
let stateP1 = [], stateP2 = [];
let count1 = 120 , count2 = 120;

const nextLetter = () => {
    ul.children[i + 1].classList.add('active');
    if (i >= 1) {
        ul.children[i].classList.remove("active");
    }
    i++;
    document.getElementById("game_text").innerHTML = a[i].contiene == false ? `Empieza en ${a[i].letra}
    : ${a[i].desc}
    ` : `Contiene ${a[i].letra}: ${a[i].desc} `
}

const handleSend = () => {
    const input = document.getElementById("word").value.toUpperCase();
    console.log(ul.children[i])
    if (input == a[i].respuesta) {
        ul.children[i].classList.add('green');
        stateP1 = [i].push(1)
    } else {
        ul.children[i].classList.add('red');
        stateP1 = [i].push(0)
    }
    nextLetter()
}

const pasaPalabra = () => {

    ul.children[i].classList.toggle('orange');

    if (player == 'player1') {
        player = 'player2'
    } else {
        player = 'player1'
    }

    if (player == 'player1') {
        stateP1 = [i].push(2)
        let l = document.getElementById("timer-1");
        inter1 = setInterval(function () {
            l.innerHTML = count1;
            if (count1 != 0 && player == 'player1') {
                count1--
            } else {
                clearInterval(inter1)
            }
        }, 1000);
    } else {
        stateP2 = [i].push(2)
        let l2 = document.getElementById("timer-2");
        inter2 = setInterval(function () {
            l2.innerHTML = count2;
            if (count2 != 0 && player == 'player2') {
                count2--
            } else {
                clearInterval(inter2)
            }
        }, 1000);
    }
    handleSend();
}

// if (ul.children[i] == null) {
//     for (let m = 0; m < ul.children.length; m++) {
//         ul.children[m].classList.remove("orange");
//         ul.children[m].classList.remove("green");
//         ul.children[m].classList.remove("red");
//     }
//     i = 0;
// }

const startGame = () => {
    document.getElementById("game_text").innerHTML = a[i].contiene == true ? `Empieza en ${a[i].letra}
    : ${a[i].desc}
    ` : `Contiene ${a[i].letra}: ${a[i].desc} `
    ul.children[0].classList.toggle('active');
}
