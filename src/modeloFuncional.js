let pibs = [
    { pais:'Russia', crescimentoPIB:2 },
    { pais:'US', crescimentoPIB:3 },
    { pais:'China', crescimentoPIB:6 },
    { pais:'Brasil', crescimentoPIB:1 },
    { pais:'India', crescimentoPIB:4 },
    { pais:'Japao', crescimentoPIB:3 }
];
var total=0
for (let i = 0; i < pibs.length; i++){
	total += pibs[i].crescimentoPIB;
}
 
var total = pibs.reduce( function(prevVal, elem ) {
    return prevVal + elem.crescimentoPIB;
}, 0 );
 
console.log(`total PIB paises : ${total}`);
 
var animais = [
	{ nome: 'Zeus', idade: 3, tipo: 'cao'},
	{ nome: 'Frodo', idade: 3, tipo: 'gato'},
	{ nome: 'Marley', idade: 2, tipo: 'cao'},
	{ nome: 'Bob', idade: 1, tipo: 'gato'},
	{ nome: 'Belinha', idade: 3, tipo: 'cao'},
];
var gatos = animais.filter( a => a.tipo=='gato')
var caes = animais.filter( a => a.tipo=='cao')

var somaidade = animais.reduce((total, elemento) => {
	if (elemento.tipo === 'cao') return total += (elemento.idade );
	else return total}, 0);
console.log('soma da idade dos cachorros: ' + somaidade);

var somaidadegatos = animais.filter(a=> a.tipo=='gato')
.reduce((total, elemento) => {
return total += (elemento.idade )}, 0);
console.log('soma da idade dos gatos: ' + somaidadegatos);


var cidades = [ 
	{nome: 'Concordia', habitantes: 80000},
	{nome: 'Erechim', habitantes: 104500},
	{nome: 'Chapeco', habitantes: 210000},
	{nome: 'Joacaba', habitantes: 25000},
	{nome: 'Xanxere', habitantes: 40000},
	{nome: 'Seara', habitantes: 14000},
	{nome: 'Castelo Branco', habitantes: 5000},
]
var cidadesMenos20k = cidades.filter(c => c.habitantes < 20000);

// adicionarItem(cidadesMenos20k);
const pessoas = [
	{ nome: 'Fernanda', sexo: 'feminino', idade: 23 },
	{ nome: 'Jonathan', sexo: 'masculino', idade: 12 },
	{ nome: 'Igor', sexo: 'masculino', idade: 20 },
	{ nome: 'Mariana', sexo: 'feminino', idade: 23 },
	{ nome: 'Axel', sexo: 'masculino', idade: 23 },
];

function maioresPorGenero (pessoas) {
	var resultado =  pessoas.reduce(
		(valorAnterior, pessoa) => ({
			...valorAnterior,
			[pessoa.sexo]: [ ...(valorAnterior[pessoa.sexo] || []), pessoa ],
		}),
		{}
	);
	return resultado;
 }

var p = maioresPorGenero(pessoas);

console.log(`pessoas original: ` + pessoas);
console.log(`depois transformacao: ` + p);

// array.reduce(function(acumulador, elementoAtual, indexAtual, arrayOriginal), valorInicial)
const maioresPorGenero2 = (pessoas) =>
	pessoas.filter((p) => p.idade >= 18).reduce(
		(prevVal, elem) => ({
			...prevVal,
			[elem.sexo]: [ ...(prevVal[elem.sexo] || []), elem ],
		}),
		{}
);

// adicionarItem(`pessoas original: ` + pessoas);


// function adicionarItem(valor){
// 	var node = document.createElement("li");
// 	var texto = document.createTextNode(valor);
// 	node.appendChild(texto);
// 	document.getElementById("saida").appendChild(node);
//   }
