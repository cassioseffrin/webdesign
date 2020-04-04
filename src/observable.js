import { Observable } from 'rxjs';

const observable = new Observable(sujeito => {
    sujeito.next('mensagem de um Observable 1!');
    setTimeout(  ()=>{
        sujeito.next('mensagem de um Observable 2s de delay!');
    },2000 );
});

 
observable.subscribe(valor => console.log(valor));




// perceba  que o objeto observador está no escopo do construtor. 
// Não podemos acessar o observador e chamar .next () 
// fora da implementação interna do Observable. 
// Esse escopo garante que apenas o Observável saiba como e quando os eventos devem ser emitidos 
// para os assinantes de nossos Observáveis.


// Node ainda não suporta importações do ES6. 
// A solução chama-se esm, o carregador de módulo JavaScript brilhantemente simples, sem babel e sem pacote.
// Instale o esm em seu projeto: npm install --save esm
// Execute seu código com esm: node -r esm arquivo.js
// E deve funcionar sem nenhuma modificação de código. 
// Também é possível usando o babel.