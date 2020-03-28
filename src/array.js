 

import { Subject } from 'rxjs';


var array = [];
var arraySubject = new Subject();

var pushToArray = function (item) {
  array.push(item);
  arraySubject.next(item);
}

arraySubject.subscribe((item) => console.log(item));

pushToArray('teste1');
pushToArray('teste1');
pushToArray('teste1');
pushToArray('teste1');
pushToArray('teste1');





import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  setTimeout(() => observer.next('hello from Observable!'), 1000);
});

observable.subscribe(v => console.log(v));