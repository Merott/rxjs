import { Observable } from '../../Observable';
import { skipLast } from '../../operator/skipLast';

Observable.prototype.skipLast = skipLast;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    skipLast: typeof skipLast;
  }
}