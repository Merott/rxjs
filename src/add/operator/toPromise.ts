
import { Observable } from '../../Observable';
import { toPromise } from '../../operator/toPromise';

Observable.prototype.toPromise = toPromise;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    toPromise: typeof toPromise;
  }
}