
import { Observable } from '../../Observable';
import { expand } from '../../operator/expand';

Observable.prototype.expand = expand;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    expand: typeof expand;
  }
}