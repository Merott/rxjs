
import { Observable } from '../../Observable';
import { bufferTime } from '../../operator/bufferTime';

Observable.prototype.bufferTime = bufferTime;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    bufferTime: typeof bufferTime;
  }
}