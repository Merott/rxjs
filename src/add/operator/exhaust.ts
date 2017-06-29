
import { Observable } from '../../Observable';
import { exhaust } from '../../operator/exhaust';

Observable.prototype.exhaust = exhaust;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    exhaust: typeof exhaust;
  }
}