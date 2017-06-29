
import { Observable } from '../../Observable';
import { bufferWhen } from '../../operator/bufferWhen';

Observable.prototype.bufferWhen = bufferWhen;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    bufferWhen: typeof bufferWhen;
  }
}