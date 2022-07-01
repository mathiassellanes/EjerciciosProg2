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


let player = 'player1';
let count1 = 120
let count2 = 120;

let stateP1 = [];
let stateP2 = [];

const startGame = () => {
    document.getElementById("game_text").innerHTML = a[0].contiene == true ? `Empieza en ${a[i - 1].letra}
    : ${a[i - 1].desc}
    ` : `Contiene ${a[i - 1].letra}: ${a[i - 1].desc} `
    ul.children[0].classList.toggle('active');
}

const pasaPalabra = () => {

    ul.children[i - 1].classList.toggle('orange');
    ul.children[i - 1].classList.remove("active");

    if (player == 'player1') {
        player = 'player2'
    } else {
        player = 'player1'
    }

    if (player == 'player1') {
        stateP1 = [i - 1].push(2)
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
        stateP2 = [i - 1].push(2)
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
}

const handleSend = () => {
    const input = document.getElementById("word").value;
    if (input == a[i - 1].respuesta) {
        ul.children[i - 1].classList.toggle('green');
        ul.children[i - 1].classList.remove("active");
        stateP1 = [i - 1].push(1)
        i++;
        ul.children[i - 1].classList.toggle('active');
    } else {
        ul.children[i - 1].classList.toggle('red');
        ul.children[i - 1].classList.remove("active");
        stateP1 = [i - 1].push(0)
        player = 'player2';
        i++
        ul.children[i - 1].classList.toggle('active');
    }
}

const btn = document.getElementById('Pasapalabra');
const ul = document.getElementById('lista');



btn.addEventListener('click', () => {

    console.log("estoy en", ul.children[i]);

    console.log("el que borre es ", ul.children[i - 1]);


    let b = i;

    ul.children[i].classList.toggle('active');

    if (ul.children[b--].classList.contains("active")) {

        ul.children[b--].classList.remove("active");
    }

    if (i <= 25) {
        i++;
        console.log(i);
    }

    if (ul.children[i] == null) {
        for (let m = 0; m < ul.children.length; m++) {
            console.log(m)
            ul.children[m].classList.remove("orange");
            ul.children[m].classList.remove("green");
            ul.children[m].classList.remove("red");
        }
        i = 0;
    }
});

const borrar = () => {

}


