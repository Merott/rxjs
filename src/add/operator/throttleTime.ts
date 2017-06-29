
import { Observable } from '../../Observable';
import { throttleTime } from '../../operator/throttleTime';

Observable.prototype.throttleTime = throttleTime;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    throttleTime: typeof throttleTime;
  }
}