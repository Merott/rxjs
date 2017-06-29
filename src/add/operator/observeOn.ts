
import { Observable } from '../../Observable';
import { observeOn } from '../../operator/observeOn';

Observable.prototype.observeOn = observeOn;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    observeOn: typeof observeOn;
  }
}