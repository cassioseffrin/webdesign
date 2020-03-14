import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';

const maioresPorGenero = () => (source$) =>
	source$.pipe(
		filter((e) => e.idade >= 18),
		reduce(
			(a, b) => ({
				...a,
				[b.sexo]: [ ...(a[b.sexo] || []), b ],
			}),
			{}
		)
	);

	const pessoas = [
		{ nome: 'Fernanda', sexo: 'feminino', idade: 23 },
		{ nome: 'Jonathan', sexo: 'masculino', idade: 12 },
		{ nome: 'Igor', sexo: 'masculino', idade: 20 },
		{ nome: 'Mariana', sexo: 'feminino', idade: 23 },
		{ nome: 'Axel', sexo: 'masculino', idade: 23 },
	];

from(pessoas).pipe(maioresPorGenero()).subscribe((e) => console.log(e), (err) => console.error(err));
