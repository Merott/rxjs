
import { Observable } from '../../Observable';
import { repeat } from '../../operator/repeat';

Observable.prototype.repeat = repeat;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    repeat: typeof repeat;
  }
}