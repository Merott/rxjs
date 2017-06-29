
import { Observable } from '../../Observable';
import { bufferCount } from '../../operator/bufferCount';

Observable.prototype.bufferCount = bufferCount;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    bufferCount: typeof bufferCount;
  }
}