// RxJS v6+
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

// console.log('\nExemplo 1:') ;

// // extrair
// const source = from([
//   { nome: 'Firmino', idade: 30 },
//   { nome: 'Renato Gaucho', idade: 35 }
// ]);
// //pegar os nomes
// const resultado = source.pipe(pluck('nome'));
// //saida: "Firmino", "Renato Gaucho"
// const subscribe = resultado.subscribe(val => console.log(val));



console.log('\n\n\nExemplo 2:') ;

const source2 = from([
  { nome: 'Firmino', idade: 30, trabalho: { especialidade: 'desenvolvedor', linguagem: 'JavaScript' } },
  // undefined quando nao houver
  { nome: 'Renato Gaucho', idade: 35 }
]);
//pega a especialidade  dentro trabalho
const resultado2 = source2.pipe(pluck('trabalho', 'especialidade'));
//saida: "desenvolvedor" , undefined
const subscribe2 = resultado2.subscribe(val => console.log(val));



// select distinct nome from pessoas;


