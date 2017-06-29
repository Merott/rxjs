
import { Observable } from '../../Observable';
import { filter } from '../../operator/filter';

Observable.prototype.filter = filter;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    filter: typeof filter;
  }
}