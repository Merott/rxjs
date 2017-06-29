
import { Observable } from '../../Observable';
import { first } from '../../operator/first';

Observable.prototype.first = <any>first;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    first: typeof first;
  }
}