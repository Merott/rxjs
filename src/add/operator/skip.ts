
import { Observable } from '../../Observable';
import { skip } from '../../operator/skip';

Observable.prototype.skip = skip;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    skip: typeof skip;
  }
}