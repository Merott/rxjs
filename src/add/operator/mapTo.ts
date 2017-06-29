
import { Observable } from '../../Observable';
import { mapTo } from '../../operator/mapTo';

Observable.prototype.mapTo = mapTo;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    mapTo: typeof mapTo;
  }
}