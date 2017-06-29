import { Observable } from '../../Observable';
import { timestamp } from '../../operator/timestamp';

Observable.prototype.timestamp = timestamp;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    timestamp: typeof timestamp;
  }
}