
import { Observable } from '../../Observable';
import { exhaustMap } from '../../operator/exhaustMap';

Observable.prototype.exhaustMap = exhaustMap;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    exhaustMap: typeof exhaustMap;
  }
}