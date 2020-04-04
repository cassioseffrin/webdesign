import { Subject } from 'rxjs';

const subject = new Subject();


subject.next('mensagem antes da assinatura  !');
 
subject.subscribe(v => {console.log(`mensagem do subject: ${v}`);});
 
subject.next('mensagem depois da assinatura !');
 















// Os Subjects, diferentemente do Observables, compartilham seu trabalho com todos os assinantes. 
// Ao contrário do  Observable compartilha seu trabalho com todos os assinantes. 

// Se quisermos obter o valor anterior a assinatura que perdemos? 
//  aí que entra o ReplaySubject.