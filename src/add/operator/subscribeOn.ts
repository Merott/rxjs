
import { Observable } from '../../Observable';
import { subscribeOn } from '../../operator/subscribeOn';

Observable.prototype.subscribeOn = subscribeOn;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    subscribeOn: typeof subscribeOn;
  }
}