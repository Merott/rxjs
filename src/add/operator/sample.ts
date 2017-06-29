
import { Observable } from '../../Observable';
import { sample } from '../../operator/sample';

Observable.prototype.sample = sample;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    sample: typeof sample;
  }
}