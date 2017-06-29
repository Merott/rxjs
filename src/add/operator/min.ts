
import { Observable } from '../../Observable';
import { min } from '../../operator/min';

Observable.prototype.min = min;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    min: typeof min;
  }
}