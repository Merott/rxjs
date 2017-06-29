
import { Observable } from '../../Observable';
import { delay } from '../../operator/delay';

Observable.prototype.delay = delay;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    delay: typeof delay;
  }
}