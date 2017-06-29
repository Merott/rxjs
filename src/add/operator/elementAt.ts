
import { Observable } from '../../Observable';
import { elementAt } from '../../operator/elementAt';

Observable.prototype.elementAt = elementAt;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    elementAt: typeof elementAt;
  }
}