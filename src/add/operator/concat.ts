
import { Observable } from '../../Observable';
import { concat } from '../../operator/concat';

Observable.prototype.concat = concat;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    concat: typeof concat;
  }
}