 
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// porque o $
// usado por convenção para indicar que uma variável contém um Observable ou que 
// uma função retornará um Observable.

 
//  produz valores distintos, com base no último valor emitido
const source$ = from([
  { nome: 'José' },
  { nome: 'Maria' },

  { nome: 'Joana' }
]);

source$
  .pipe(distinctUntilChanged((prev, curr) => prev.nome === curr.nome))
  .subscribe(console.log);