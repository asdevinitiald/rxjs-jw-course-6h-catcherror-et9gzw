import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error('Time Out'));
  }, 3000);
});
console.log('App Started');
failingHttpRequest$
  .pipe(catchError((error) => EMPTY))
  // .pipe(catchError((error) => of('Failure')))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
  });
