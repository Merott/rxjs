
import { Observable } from '../../Observable';
import { single } from '../../operator/single';

Observable.prototype.single = single;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    single: typeof single;
  }
}