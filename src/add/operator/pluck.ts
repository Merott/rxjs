
import { Observable } from '../../Observable';
import { pluck } from '../../operator/pluck';

Observable.prototype.pluck = pluck;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    pluck: typeof pluck;
  }
}