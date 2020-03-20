import { ReplaySubject } from 'rxjs';
const replaySubject = new ReplaySubject();
setTimeout( ()=>{ 
    replaySubject.next('Mensagem do  ReplaySubject 1!');
},3000);

replaySubject.subscribe(v => console.log(v));
replaySubject.next('Mensagem do ReplaySubject 2!');










// Observe que a API do ReplaySubject é muito semelhante ao Subject. 
// Porem nesse caso, não perdemos o primeiro evento. 
// O ReplaySubject repete o último valor emitido que perdemos. 
 
// Do nosso ReplaySubject. 
