import { from } from 'rxjs';
import { filter, reduce, map } from 'rxjs/operators';

var pessoas = [
	{ nome: 'Fernanda', sexo: 'feminino', idade: 23 },
	{ nome: 'Jonathan', sexo: 'masculino', idade: 12 },
	{ nome: 'Igor', sexo: 'masculino', idade: 20 },
	{ nome: 'Mariana', sexo: 'feminino', idade: 23 },
	{ nome: 'Axel', sexo: 'masculino', idade: 23 }
];

setTimeout(() => {
	pessoas.push({ nome: 'Rodo', sexo: 'masculino', idade: 44 });
}, 2000);

const maioresPorGenero = () => (source$) =>
	source$.pipe(
		filter((e) => e.idade >= 18),
		reduce(
			(a, b) => ({
				...a,
				[b.sexo]: [ ...(a[b.sexo] || []), b ]
			}),
			{}
		)
	);

console.log(maioresPorGenero);

from(pessoas).pipe(maioresPorGenero()).subscribe((e) => adicionarObj(e), (err) => console.error(err));

function adicionarObj(obj) {
	adicionarItem('masculino');

	obj.masculino.map((e) => adicionarItem(e.nome));
}

function adicionarItem(item) {
	var node = document.createElement('li');
	var texto = document.createTextNode(item);
	node.appendChild(texto);
	document.getElementById('saida').appendChild(node);
}
