import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject(
  'valor inicial do BehaviorSubject'
);

behaviorSubject.subscribe(v => console.log(v));
behaviorSubject.next('novo valor do BehaviorSubject');









// Como podemos ver o construtor do BehaviorSubject pode assumir um valor.
//  Esse valor inicial será reproduzido para todos os assinantes até que um novo valor seja emitido; 
//  o novo valor será reproduzido para todos os novos assinantes. 
//  BehaviorSubject é bastante comum para uso em aplicativos com estilos de programação reativos, 
//  nos quais queremos compartilhar algumas informações / estado central em todo o código. 
  