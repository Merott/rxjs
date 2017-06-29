
import { Observable } from '../../Observable';
import { last } from '../../operator/last';

Observable.prototype.last = <any>last;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    last: typeof last;
  }
}