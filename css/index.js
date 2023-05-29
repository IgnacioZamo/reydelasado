
// Se define Arrays con sus objetos
const comida = [
    {id:1,nombre:"Malvina",precio: 800},
    {id:2,nombre:"Matambre",precio: 900},
    {id:3,nombre:"Vacio",precio: 700},
    {id:4,nombre:"Falda",precio: 850},
];

const acompañar = [
    {id:5,nombre:"fritas",precio: 150},
    {id:6,nombre:"pure",precio: 125},
    {id:7,nombre:"ensalada",precio: 100},
];

const llevarSiNo = [
    {id:8,nombre:"Si",precio: 50},
    {id:9,nombre:"No",precio: 0},
];

// Se pide al usuario que seleccione mediante prompt, lo que desea
alert("ingrese plato principal a encargar");
let encargarComida = parseInt(prompt("1-Corte Malvina $800, 2- Matambre $900, 3-Vacio $700, 4-Falda $850"));
alert("ingrese con que desea acompañar su plato principal");
let encargarAcomp = parseInt(prompt("5-Fritas $150, 6-Pure $125, 7-Ensalada $100"));
let lleva = prompt("¿Desea su comida para llevar? Indique: Si ($50)-No ($0)");

// Se selecciona el objeto Precio, basandose en la ID que eligió el usuario mediante los prompt
let comidaElegida = comida.find((item) => item.id == encargarComida)
let acompElegida = acompañar.find((item) => item.id == encargarAcomp)
let llevaElegida = llevarSiNo.find((item) => item.nombre == lleva)

// Se suma el precio final, dependiendo de las opciones elegidas
totalPrecio = comidaElegida.precio + acompElegida.precio + llevaElegida.precio;


// mensaje final.
let mensaje = `su total a abonar es ${totalPrecio}`;
alert (mensaje); 