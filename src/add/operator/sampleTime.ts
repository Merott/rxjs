
import { Observable } from '../../Observable';
import { sampleTime } from '../../operator/sampleTime';

Observable.prototype.sampleTime = sampleTime;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    sampleTime: typeof sampleTime;
  }
}