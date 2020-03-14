


var pibs = [
    { pais:'Russia', crescimentoPIB:2 },
    { pais:'US', crescimentoPIB:3 },
    { pais:'China', crescimentoPIB:6 },
    { pais:'Brasil', crescimentoPIB:1 },
    { pais:'India', crescimentoPIB:4 },
    { pais:'Japao', crescimentoPIB:3 }
];
 
var total = pibs.reduce( function( prevVal, elem ) {
    return prevVal + elem.crescimentoPIB;
}, 0 );
 
console.log(`total PIB paises : ${total}`);
 


animais = [
{
	nome: 'Zeus',
	idade: 3,
	tipo: 'cao'
},
{
	nome: 'Marley',
	idade: 6,
	tipo: 'cao'
},
{
	nome: 'Belinha',
	idade: 1,
	tipo: 'gato'
},
{
	nome: 'Bob',
	idade: 3,
	tipo: 'cao'
},
];


somaidade = animais.reduce((total, elemento) => {
if (elemento.tipo === 'cao') return total += (elemento.idade );
else return total}, 0);

console.log('soma da idade dos cachorros: ' + somaidade);




const pessoas = [
	{ nome: 'Fernanda', sexo: 'feminino', idade: 23 },
	{ nome: 'Jonathan', sexo: 'masculino', idade: 12 },
	{ nome: 'Igor', sexo: 'masculino', idade: 20 },
	{ nome: 'Mariana', sexo: 'feminino', idade: 23 },
	{ nome: 'Axel', sexo: 'masculino', idade: 23 },
];

const maioresPorGenero = (pessoas) =>
	pessoas.reduce(
		(prevVal, elem) => ({
			...prevVal,
			[elem.sexo]: [ ...(prevVal[elem.sexo] || []), elem ],
		}),
		{}
	);

console.log(maioresPorGenero(pessoas));



// array.reduce(function(acumulador, elementoAtual, indexAtual, arrayOriginal), valorInicial)
const maioresPorGenero2 = (pessoas) =>
	pessoas.filter((p) => p.idade >= 18).reduce(
		(prevVal, elem) => ({
			...prevVal,
			[elem.sexo]: [ ...(prevVal[elem.sexo] || []), elem ],
		}),
		{}
	);

