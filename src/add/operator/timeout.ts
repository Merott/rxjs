
import { Observable } from '../../Observable';
import { timeout } from '../../operator/timeout';

Observable.prototype.timeout = timeout;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    timeout: typeof timeout;
  }
}