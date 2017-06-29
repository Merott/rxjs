
import { Observable } from '../../Observable';
import { toArray } from '../../operator/toArray';

Observable.prototype.toArray = toArray;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    toArray: typeof toArray;
  }
}