// import * as Rx from 'rxjs/Observable'; versao 7 do rx
import {Observable, Subscriber} from "rxjs";
console.log(Observable);


// do zro 
var observable = Observable.create(function subscribe( observer ){
   try{
    observer.next('opa') // emite um valor 
    observer.next('opa2')
    observer.complete( )
    observer.complete( 'sera que vai?')
   }catch (e){
       observer.error(e)
   }

});

// observable.next('halles');
// observable.subscribe((x) =>  console.log(x) );





observable.subscribe((x) =>  adicionarItem(x) );
function adicionarItem(item){
  var node = document.createElement("li");
  var texto = document.createTextNode(item);
  node.appendChild(texto);
  document.getElementById("saida").appendChild(node);
}

