
import { Observable } from '../../Observable';
import { buffer } from '../../operator/buffer';

Observable.prototype.buffer = buffer;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    buffer: typeof buffer;
  }
}