// import  {Rx} from 'rxjs/Subject';
// import { filter, reduce, map } from 'rxjs/operators';

import { Subject } from 'rxjs';


var array = [];
var arraySubject = new Subject();

var pushToArray = function (item) {
  array.push(item);
  arraySubject.next(item);
}

// Subscribe to the subject to react to changes
arraySubject.subscribe((item) => console.log(item));



pushToArray('teste1');
pushToArray('teste1');
pushToArray('teste1');
pushToArray('teste1');
pushToArray('teste1');